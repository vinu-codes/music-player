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
  const [isAuthenticated, setIsAuthenticated] = useState(null)
  const [accessToken, setAccessToken] = useState(null)
  const [refreshToken, setRefreshToken] = useState(null)
  const [expiresIn, setExpiresIn] = useState(null)

  const contextValue = useMemo(
    () => ({
      isAuthenticated,
      accessToken,
      refreshToken,
      expiresIn,
      setAccessToken,
      setRefreshToken,
      setExpiresIn,
      setIsAuthenticated,
    }),
    [
      isAuthenticated,
      accessToken,
      refreshToken,
      expiresIn,
      setAccessToken,
      setRefreshToken,
      setExpiresIn,
      setIsAuthenticated,
    ],
  )

  return (
    <SpotifyContext.Provider value={contextValue}>
      {children}
    </SpotifyContext.Provider>
  )
}

const useSpotifyContext = () => useContext(SpotifyContext)

// useSpotify hook
const useSpotify = () => {
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
        setIsAuthenticated(true)
      } catch (error) {
        console.log({ error: error }, 'error received from server')
        setIsAuthenticated(false)
      }
    }
    exchangeCodeForToken()
  }, [code])
}

export { SpotifyProvider, useSpotifyContext, useSpotify }
