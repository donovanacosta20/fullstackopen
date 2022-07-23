const commentRouter = require('express').Router()

const commentModel = require('../models/comments')

commentRouter.get('/:id', async (request, response) => {
    const comments = await commentModel.find({ blog: request.params.id })

    response.json(comments)
})

commentRouter.post('/:id', async (request, response) => {
    const body = request.body

    const newCommentObject = new commentModel({
        comment: body.comment,
        blog: body.blog
    })

    const commentSaved = await newCommentObject.save()

    response.json(commentSaved)
})




module.exports = commentRouter