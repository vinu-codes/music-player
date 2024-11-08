const express = require('express') // Import express

const app = express() // Make express app

app.post('/login', (req, res) => {})
// Create a POST route for /login endpoint why?
// POST submits new data to the server.
// In this case, we are submitting login data to the server
// req is the request object, res is the response object
// request object contains the data sent by the client
// response object is used to send a response back to the client
// GET retrieves resources.
// POST submits new data to the server.
// PUT updates existing data.
// DELETE removes data.
