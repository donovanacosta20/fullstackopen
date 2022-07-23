const commentRouter = require('express').Router()

const commentModel = require('../models/comments')

commentRouter.get('/', async (request, response) => {
    const comment = await commentModel.find({})

    response.json(comment)
})

commentRouter.post('/', async (request, response) => {
    const body = request.body

    const newCommentObject = new commentModel({
        comment: body.comment,
        blog: request.params.id
    })

    const commentSaved = await newCommentObject.save()

    response.json(commentSaved)
})




module.exports = commentRouter