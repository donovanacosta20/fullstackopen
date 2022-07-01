const blogsRouter = require('express').Router()
const { request } = require('express')
const Blog = require('../models/blog')

//GET ALL
blogsRouter.get('/', async (request, response) => {
    const blogs = await Blog.find({})

    response.json(blogs)

})
//POST
blogsRouter.post('/', async (request, response) => {
    const blog = new Blog(request.body)

    const result = await blog.save()

    response.status(201).json(result)
})
//DELETE
blogsRouter.delete('/:id', async (request, response) => {
    const id = request.params.id

    await Blog.findByIdAndRemove(id)

    response.status(204).end()
})

blogsRouter.put('/:id', async (request, response) => {
    const id = request.params.id

    const blogUpdate = await Blog.findOneAndUpdate({ _id: id }, { $set: { likes: request.body.likes } }, { new: true })

    response.status(200).json(blogUpdate)
})


module.exports = blogsRouter