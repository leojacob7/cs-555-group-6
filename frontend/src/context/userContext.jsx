import { memo, useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
import { useAxios } from '../utils/apiCalls'

export const AuthContext = createContext(1)

export const UserProvider = ({ children }) => {
  console.log('here in context', children)
  const [session, setSession] = useState(localStorage.getItem('user') || null)
  const [user, setUser] = useState(null)
  const [data, error, setError, loading, operation] = useAxios()

  const memoisedValue = memo(
    () => ({ session, user, error, setUser, setError, setSession }),
    [user, error]
  )

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
