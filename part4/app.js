const config = require('./utils/config')
const express = require('express');
const app = express();
const cors = require('cors');
const notesRouter = require('./controllers/blogs')
const logger = require('./utils/logger')
const mongoose = require('mongoose');
const blogRouter = require('./controllers/blogs');

logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI)
    .then(() => {
        logger.info('connected to MongoDB')
    })
    .catch(error => {
        logger.error('error connecting to MongoDb', error.message)
    })

app.use(cors());
app.use(express.static('build'));
app.use(express.json());

app.use('/api/blog', blogRouter)

module.exports = app;
