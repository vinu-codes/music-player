import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const CLIENT_ID = 'c731efae217b45818bc43ad7e1a14218'
const REDIRECT_URI = 'http://localhost:3000'
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
const RESPONSE_TYPE = 'code'

const AUTH_URL = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&redirect_uri=${REDIRECT_URI}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`

const Login = () => {
  const navigate = useNavigate()
  const codeStr = new URLSearchParams(window.location.search).get('code')
  const code = {
    code: codeStr,
  }

  useEffect(() => {
    if (!code) {
      console.log('No code')
      return
    }

    const loginCall = async () => {
      const config = {
        url: 'http://localhost:3001/login',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: code,
      }
      try {
        const response = await axios(config)
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    loginCall()
  }, [code])

  return (
    <div>
      <button>
        <a href={AUTH_URL}>Login to Spotify</a>
      </button>
    </div>
  )
}

export { Login }
