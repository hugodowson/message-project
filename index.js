const express = require('express')
const app = express()
const qs = require('qs')
require('dotenv').config();

app.get('/verify-webhook', (req, res) => {
  const mode = req.query['hub.mode']
  const challenge = req.query['hub.challenge']
  const token = req.query['hub.verify_token']

  if(mode === 'subscribe') {
    res.status(200).send(challenge)
  } else {
    res.sendStatus(400)
  }
})

app.listen(process.env.PORT || 3001, () => console.log("server is running"))