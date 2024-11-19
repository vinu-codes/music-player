import React, {
  createContext,
  useState,
  useContext,
  useMemo,
  useEffect,
} from 'react'
import axios from 'axios'

const SpotifyContext = createContext()

// SpotifyProvider component
const SpotifyProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [accessToken, setAccessToken] = useState(null)
  const [refreshToken, setRefreshToken] = useState(null)
  const [expiresIn, setExpiresIn] = useState(null)

  return (
    <SpotifyContext.Provider
      value={{
        accessToken,
        setAccessToken,
        refreshToken,
        setRefreshToken,
        expiresIn,
        setExpiresIn,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </SpotifyContext.Provider>
  )
}

// useSpotifyContext hook
const useSpotifyContext = () => useContext(SpotifyContext)

// useSpotify hook
const useSpotify = (authenticatedCallback = () => { }) => {
  const { setAccessToken, setRefreshToken, setExpiresIn, setIsAuthenticated } =
    useSpotifyContext()

  const code = new URLSearchParams(window.location.search).get('code')

  useEffect(() => {
    if (!code) return

    const exchangeCodeForToken = async () => {
      const config = {
        url: 'http://localhost:3001/login',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: { code },
      }
      try {
        const response = await axios(config)
        console.log(response.data, 'received on front end')
        setAccessToken(response.data.access_token)
        setRefreshToken(response.data.refresh_token)
        setExpiresIn(response.data.expires_in)
        setIsAuthenticated(true);
        authenticatedCallback();
      } catch (error) {
        console.log({ error: error }, 'error received from server')
        setIsAuthenticated(false)
      }
    }
    exchangeCodeForToken()
  }, [code])
}

export { SpotifyProvider, useSpotifyContext, useSpotify }
