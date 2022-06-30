const express = require('express')
const cors = require('cors')
const app = express()
const config = require('./utils/config')
const logger = require('./utils/logger')

const blogsRouter = require('./controllers/blogs')

const mongoose = require('mongoose')

logger.info('Connecting to MONGODB', process.env.MONGODB_URI)
mongoose.connect(config.MONGODB_URI)

app.use(cors())
app.use(express.json())
app.use('/api/blogs', blogsRouter)


module.exports = app

//Configure of server