const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

const Blog = require('../models/blog')

const inititalBlogs = [
    {
        title: "React patterns",
        author: "Michael Chan",
        url: "https://reactpatterns.com/",
        likes: 7,
    },
    {
        title: "Go To Statement Considered Harmful",
        author: "Edsger W. Dijkstra",
        url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
        likes: 5,
    }
]

beforeEach(async () => {
    await Blog.deleteMany({})
    let objectBlog = new Blog(inititalBlogs[0])
    await objectBlog.save()
    objectBlog = new Blog(inititalBlogs[1])
    await objectBlog.save()
})

test('all notes are returned', async () => {
    const response = await api.get('/api/blogs')

    expect(response.body).toHaveLength(inititalBlogs.length)
})

test('a specific blog is within the returned blogs', async () => {
    const response = await api.get('/api/blogs')

    const contents = response.body.map(blog => blog.title)
    expect(contents).toContain(
        'React patterns'
    )
})

test('unique id blogs', async () => {
    const response = await api.get('/api/blogs')

    expect(response.body[0]._id).toBeDefined()
})

test('check add new blog to database', async () => {
    const newBlog = {
        title: 'test',
        author: 'test',
        url: 'test',
        likes: 1
    }

    await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(201)

    const response = await api.get('/api/blogs')
    expect(response.body).toHaveLength(inititalBlogs.length + 1)
})



afterAll(() => {
    mongoose.connection.close()
})