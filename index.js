const express = require('express')
const app = express()
const posts = require('./posts')

app.get('/posts', (req, res) => {
  res.json(posts)
})

app.get('/', (req, res) => {
  res.send(req.params)
})

app.listen(process.env.PORT || 3001, () => console.log("server is running"))