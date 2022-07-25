<<<<<<< HEAD
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
=======
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
>>>>>>> 360932f82c17bd5f7b792094a269d8725a6465b8
