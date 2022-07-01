const lodash = require('lodash')
const User = require('../models/user')
const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    return blogs.map(blog => blog.likes).reduce((prev, curr) => curr += prev)
}

const emptyList = (blogs) => {
    return blogs.length === 0
}

const onlyOne = (blogs) => {
    return blogs.length === 1 ? blogs[0].likes
        : blogs
}

const favoriteBlog = (blogs) => {
    const likes = Math.max(...blogs.map(blog => blog.likes))
    return blogs.find(blog => blog.likes === likes)
}

const mostBlog = (blogs) => {
    return lodash.max(blogs)
}

const mostLikes = (blogs) => {
    return lodash.max(blogs)
}

const usersInDb = async () => {
    const users = await User.find({})
    return users.map(u => u.toJSON())
}

module.exports = {
    dummy,
    totalLikes,
    emptyList,
    onlyOne,
    favoriteBlog,
    mostBlog,
    mostLikes,
    usersInDb
}