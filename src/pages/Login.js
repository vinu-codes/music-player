import React from 'react'
import { useSpotify } from '@hooks/SpotifyProvider'
import { useNavigate } from 'react-router-dom'

const CLIENT_ID = 'c731efae217b45818bc43ad7e1a14218'
const REDIRECT_URI = 'http://localhost:3000'
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
const RESPONSE_TYPE = 'code'

const AUTH_URL = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&redirect_uri=${REDIRECT_URI}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`

const Login = () => {
  const navigate = useNavigate()

  useSpotify(() => {
    navigate('/dashboard')
  })

  return (
    <div>
      <button>
        <a href={AUTH_URL}>Login to Spotify</a>
      </button>
    </div>
  )
}

export { Login }
