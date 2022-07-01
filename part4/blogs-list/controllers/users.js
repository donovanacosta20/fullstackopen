const bcrypt = require('bcryptjs')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.get('/', async (request, response) => {
    const users = await User.find({})

    response.json(users);
})

usersRouter.post('/', async (request, response) => {
    const body = request.body
    const saltRounds = 10

    const passwordHash = bcrypt.hashSync(body.password, saltRounds)

    const user = await User({
        username: body.username,
        name: body.name,
        passwordHash,
    })

    const saveUser = await user.save()

    response.status(200).json(saveUser)
})

module.exports = usersRouter