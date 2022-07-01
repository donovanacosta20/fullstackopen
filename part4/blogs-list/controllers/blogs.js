const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

const User = require('../models/user')

//GET ALL
blogsRouter.get('/', async (request, response) => {
    const blogs = await Blog.find({}).populate('user')

    response.json(blogs)

})
//POST
blogsRouter.post('/', async (request, response) => {
    const body = request.body

    const user = await User.findById(body.userId)

    const newBlog = new Blog({
        title: body.title,
        author: body.author,
        url: body.url,
        likes: body.likes,
        user: user._id
    })

    const savedBlog = await newBlog.save()
    user.blog = user.blog.concat(savedBlog._id)
    await user.save()

    response.json(savedBlog)
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