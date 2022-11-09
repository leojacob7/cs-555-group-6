import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './context/userContext'

function AuthRoute ({ children }) {
  const location = useLocation()
  const data = useAuth()
  console.log('here authroute ??', data)
  if (!data.session) return <Navigate to='/login' state={{ from: location }} />
  return children
}

export default AuthRoute
