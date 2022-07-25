const { response } = require('express')
const Comment = require('../models/comment')

const commentsRouter = require('express').Router()

commentsRouter.get('/:id/comments', async (request, response) => {
    const comments = await Comment.find({ blog: request.params.id })
    response.json(comments)
})


commentsRouter.post('/:id/comments', async (request, response) => {
    const body = request.body

    const comment = new Comment({
        message: body.message,
        blog: body.blog
    })

    const commentSaved = await comment.save()
    response.json(commentSaved)
})

module.exports = commentsRouter