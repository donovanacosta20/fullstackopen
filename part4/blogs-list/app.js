const express = require('express')
const cors = require('cors')
const app = express()
require('express-async-errors')

const config = require('./utils/config')
const logger = require('./utils/logger')
const middleware = require('./utils/middlware')

const blogsRouter = require('./controllers/blogs')
const usersRouter = require('./controllers/users')
const logginRouter = require('./controllers/loggin')


const mongoose = require('mongoose')

logger.info('Connecting to MONGODB', process.env.MONGODB_URI)
mongoose.connect(config.MONGODB_URI)

app.use(middleware.tokenExtractor)
app.use(cors())
app.use(express.json())
app.use('/api/blogs', blogsRouter)
app.use('/api/users', usersRouter)
app.use('/api/loggin', logginRouter)

module.exports = app

//Configure of server