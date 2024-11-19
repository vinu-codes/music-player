import React from 'react'
import { useSpotifyContext } from '@hooks/SpotifyProvider'

const CLIENT_ID = 'c731efae217b45818bc43ad7e1a14218'
const REDIRECT_URI = 'http://localhost:3000/authenticate'
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
const RESPONSE_TYPE = 'code'

const AUTH_URL = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&redirect_uri=${REDIRECT_URI}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`

const Login = () => {
  return (
    <div>
      <button>
        <a href={AUTH_URL}>Login to Spotify</a>
      </button>
    </div>
  )
}

export { Login }
