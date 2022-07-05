const jwt = require('jsonwebtoken')
const blog = require('../models/blog')

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

    const decodedToken = jwt.verify(request.token, process.env.SECRET)

    if (!decodedToken.id) {
        return response.status(401).json({ error: "token missing or invalid" })
    }

    const user = await User.findById(decodedToken.id)

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

    const decodedToken = jwt.verify(request.token, process.env.SECRET)

    const blog = await Blog.findById(id)

    if (blog.user.toString() === decodedToken.id.toString()) {
        await Blog.findByIdAndRemove(id)

        response.status(204).end()
    }

    // if (blog.user.toString() === decodedToken.toString()) {

    //     await Blog.findByIdAndRemove(id)

    //     response.status(204).end()
    // }



})
//UPDATE
blogsRouter.put('/:id', async (request, response) => {
    const id = request.params.id

    const blogUpdate = await Blog.findOneAndUpdate({ _id: id }, { $set: { likes: request.body.likes } }, { new: true })

    response.status(200).json(blogUpdate)
})

module.exports = blogsRouter