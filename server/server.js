const express = require('express') // Import express
const axios = require('axios') // Import axios
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express() // Make express app
app.use(bodyParser.json())
app.use(cors()) // Enable CORS for all origins

require('dotenv').config({ path: '../.env' })

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
const REDIRECT_URI = 'http://localhost:3000'

app.post('/login', async (req, res) => {
  const code = req.body.code

  if (!code) {
    return res.status(400).json({ error: 'Authorization code required' })
  }

  try {
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: REDIRECT_URI,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    )
    res.send(response.data)
  } catch (error) {
    res.status(500).json({ error: 'Failed to exchange code for token' })
  }
})

const PORT = '3001'
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})

// URL encoded string
// grant_type=authorization_code&code=<your_code>&redirect_uri=<your_redirect_uri>&client_id=<your_client_id>&client_secret=<your_client_secret>
