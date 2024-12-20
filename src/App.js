import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Login } from '@pages/Login'
import { Dashboard } from '@pages/Dashboard'
import { Outlet } from 'react-router-dom'
import { SpotifyProvider, useSpotifyContext } from '@hooks/SpotifyProvider'
import useAuthNavigate from '@hooks/useAuthNavigate'

const PrivateRoutes = () => {
  const { isAuthenticated } = useSpotifyContext()

  useAuthNavigate()

  console.log({ isAuthenticated })

  if (!!isAuthenticated) {
    console.log('User is authenticated', isAuthenticated)
    return <Outlet />
  }

  return null
}

const App = () => {
  return (
    <SpotifyProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </SpotifyProvider>
  )
}

export { App }
