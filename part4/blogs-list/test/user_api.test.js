const mongoose = require('mongoose')

const bcrypt = require('bcryptjs')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

const helper = require('../utils/list_helper')
const User = require('../models/user')

describe('when there is initially one user in db', () => {
    beforeEach(async () => {
        await User.deleteMany({})

        const passwordHash = await bcrypt.hashSync('sekret', 10)
        const user = new User({ username: 'root', passwordHash })

        await user.save()
    })

    test('creation succeeds with a fresh username', async () => {
        const usersAtStart = await helper.usersInDb()

        const newUser = {
            username: 'donovan',
            name: 'Donovan London',
            password: 'nacional',
        }

        await api
            .post('/api/users')
            .send(newUser)
            .expect(200)

        const usersAtEnd = await helper.usersInDb()
        expect(usersAtEnd).toHaveLength(usersAtStart.length + 1)

        const usernames = usersAtEnd.map(u => u.username)
        expect(usernames).toContain(newUser.username)

    })


})

afterAll(() => {
    mongoose.connection.close()
})