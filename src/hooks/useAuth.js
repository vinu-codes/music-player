import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

// const useAuth = (code) => {
//   const navigate = useNavigate()
//   const [accessToken, setAccessToken] = useState(null)
//   const [refreshToken, setRefreshToken] = useState(null)
//   const [expiresIn, setExpiresIn] = useState(null)

//   useEffect(() => {
//     if (!code.code) {
//       console.log('No code')
//       return
//     }

//     const exchangeCodeForToken = async () => {
//       const config = {
//         url: 'http://localhost:3001/login',
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         data: code,
//       }
//       try {
//         const response = await axios(config)
//         console.log(response.data, 'received on front end')
//         setAccessToken(response.data.access_token)
//         setRefreshToken(response.data.refresh_token)
//         setExpiresIn(response.data.expires_in)
//         navigate('/dashboard')
//       } catch (error) {
//         console.log({ error: error }, 'error received from server')
//         navigate('/')
//       }
//     }
//     exchangeCodeForToken()
//   }, [code])

//   return {
//     accessToken,
//     refreshToken,
//     expiresIn,
//   }
// }

export default useAuth
