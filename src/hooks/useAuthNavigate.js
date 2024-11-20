import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSpotifyContext } from './SpotifyProvider'

const useAuthNavigate = () => {
  const navigate = useNavigate()
  const { isAuthenticated } = useSpotifyContext()
  useEffect(() => {
    console.log('handle navigate')
    if (!isAuthenticated) {
      console.log({ isAuthenticated }, 'inside of useAuthNavigate')
      navigate('/')
    }
  }, [isAuthenticated])
}

export default useAuthNavigate
