// ~/cours-nodejs/server/index.js

const express = require('express')
const morgan  = require('morgan')
const helmet  = require('helmet')
const cors    = require('cors')

const todosRoute = require('./routes/todosRoute')
const todosMongoRoute = require('./routes/todosMongoRoute')
const productsRoute = require('./routes/productsRoute')
const notFound = require('./middlewares/notFound')
const errorHandler = require('./middlewares/errorHandler')
const connectDB = require('./middlewares/connectDB')

connectDB()

const app = express()
const port = 3000

app.use(morgan('dev'))
app.use(helmet())
app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/',    todosRoute)
app.use('/api', todosMongoRoute)
app.use('/api', productsRoute)

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})