import React from 'react'
import { useSpotify } from '@hooks/SpotifyProvider'
import { useNavigate } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

const CLIENT_ID = 'c731efae217b45818bc43ad7e1a14218'
const REDIRECT_URI = 'http://localhost:3000'
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
const RESPONSE_TYPE = 'code'

const AUTH_URL = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&redirect_uri=${REDIRECT_URI}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`

const Button = styled.button`
  border: none;
  background: transparent;
  display: block;
  margin: auto;
  backdrop-filter: blur(20px);
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  padding: 10px 20px;
  font-family: 'Poppins', sans-serif;
  text-decoration: none;
  font-size: 24px;
  animation: animateBg 1s linear infinite;

  a {
    text-decoration: none;
    color: white;
  }

  @keyframes animateBg {
    100% {
      filter: hue-rotate(360deg);
    }
  }
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height */
  background: transparent;
`

const Login = () => {
  const navigate = useNavigate()

  useSpotify(() => {
    navigate('/dashboard')
  })

  return (
    <Container>
      <Button>
        <a href={AUTH_URL}>Login to Musicfy</a>
      </Button>
    </Container>
  )
}

export { Login }
