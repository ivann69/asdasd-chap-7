require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const router = require('./routes')


// utilities
const cors = require('cors')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

// middleware
app.use(cors())
app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))
app.use(cookieParser())
app.use(logger('dev'))

// routes
app.use(router)

// test routes
app.get('/', async (req, res) => {
  const name = 'ivan'
  res.json(`hello ${name}`)
})

app.listen(PORT, () => {
  console.log(`Listening on port localhost:${PORT}`)
})