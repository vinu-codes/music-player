import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const CLIENT_ID = '3ef3db19f6a54b198dc8db937118237c'
const REDIRECT_URI = 'http://localhost:3000'
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
const RESPONSE_TYPE = 'token'

const Login = () => {
  const navigate = useNavigate() // Initialize the useNavigate hook
  useEffect(() => {
    console.log('hit login')
    // get the hash of the url
    const hash = window.location.hash

    let token = window.localStorage.getItem('token')

    if (!token && hash) {
      // set token in local storage
      // get the url, split by '&', get the first element, split by '=', get the second element
      token = hash.split('&')[0].split('=')[1]
      window.localStorage.setItem('token', token)
      navigate('/dashboard')
    }
  }, [navigate])

  return (
    <div>
      <a
        href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
      >
        Login to Spotify
      </a>
    </div>
  )
}

export { Login }
