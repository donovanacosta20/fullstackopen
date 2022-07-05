const bcrypt = require('bcryptjs')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.get('/', async (request, response) => {
    const users = await User.find({}).populate('blog')
    response.json(users)
})

usersRouter.post('/', async (request, response) => {
    const body = request.body

    if (body.username === undefined || body.passwod === undefined) {
        return response.status(400).end(
            'Please enter a password or username correctly'
        )
    }

    if (body.username.length < 3 || body.password.length < 3) {
        return response.status(400).end(
            'Username or password almost have to be three length'
        )
    }

    if (body.username.length >= 3 && body.passwod.length >= 3) {
        const saltRounds = 10
        const passwordHash = await bcrypt.hash(body.password, saltRounds)

        const user = new User({
            username: body.username,
            name: body.name,
            passwordHash,
        })

        const savedUser = await user.save()

        response.json(savedUser)
    }
})

module.exports = usersRouter