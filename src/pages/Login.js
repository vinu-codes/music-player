import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const CLIENT_ID = '3ef3db19f6a54b198dc8db937118237c'
const REDIRECT_URI = 'http://localhost:3000'
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
const RESPONSE_TYPE = 'token'

const AUTH_URL = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&redirect_uri=${REDIRECT_URI}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`

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
  }, [])

  return (
    <div>
      <a href={AUTH_URL}>Login to Spotify</a>
    </div>
  )
}

export { Login }
