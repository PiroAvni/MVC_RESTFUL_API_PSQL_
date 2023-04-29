const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const app = express()

app.use(cors())
app.use(logger('dev'))


app.get('/', (req, res) => {
  res.send('Welcome to the API!!')
})

module.exports = app