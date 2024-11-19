import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Login } from '@pages/Login'
import { Dashboard } from '@pages/Dashboard'
import { Outlet } from 'react-router-dom'
import {
  SpotifyProvider,
  useSpotifyContext,
  useSpotify,
} from '@hooks/SpotifyProvider'
import { Authenticate } from '@pages/Authenticate'

const PrivateRoutes = () => {
  const { isAuthenticated } = useSpotifyContext()

  console.log({ isAuthenticated })

  if (!!isAuthenticated) {
    console.log('User is authenticated', isAuthenticated)
    return <Outlet />
  }

  return null
}

const App = () => {
  // i think the problem is here
  return (
    <SpotifyProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/authenticate' element={<Authenticate />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </SpotifyProvider>
  )
}

export { App }
