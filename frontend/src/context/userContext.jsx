import { memo, useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
import { useAxios } from '../utils/apiCalls'

export const AuthContext = createContext(1)

export const UserProvider = ({ children }) => {
  const sessionValue = localStorage.getItem('user')
  let parsedSessionValue = null
  if (sessionValue) parsedSessionValue = sessionValue
  const [session, setSession] = useState(parsedSessionValue)
  const [user, setUser] = useState(null)

  const [, error, setError, loading, operation] = useAxios()

  useEffect(() => {
    localStorage.setItem('user', session)
  }, [user, session])

  console.log('>>', session)

  return (
    <AuthContext.Provider
      value={{ session, user, error, setUser, setError, setSession }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth () {
  return useContext(AuthContext)
}
