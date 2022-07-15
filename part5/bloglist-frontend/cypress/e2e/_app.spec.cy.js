describe('Blog app', function() {
    beforeEach(function () {
        cy.request('POST', 'http://localhost:3001/api/testing/reset')

        const user = {
            username: 'donovan',
            name: 'Donovan',
            password: 'nacional'
        }
        const user2 = {
            username: 'root',
            name: 'root',
            password: 'root'
        }

        cy.request('POST', 'http://localhost:3001/api/users', user2)

        cy.request('POST', 'http://localhost:3001/api/users', user)


        it('front page can be opened', function() {
            cy.visit('http://localhost:3000/')
            cy.contains('Login')
        })
    })

    describe('Login', function() {
        beforeEach(() => {
            cy.visit('http://localhost:3000/')
        })

        it('succesful login', function () {
            cy.get('#username').type('donovan')
            cy.get('#password').type('nacional')
            cy.get('#loginButton').click()
        })

        it('faild login', function () {
            cy.get('#username').type('lucas')
            cy.get('#password').type('lucas')
            cy.get('#loginButton').click()


            cy.get('.notification').contains('wrong user or password')
        })

    })

    describe('user can create', function() {
    
        beforeEach(() => {
            cy.visit('http://localhost:3000/')

            cy.get('#username').type('donovan')
            cy.get('#password').type('nacional')
            cy.get('#loginButton').click()
        })

        it('new Blog by user', function () {

            cy.contains('new Blog').click()

            cy.get('#title').type('English for dummies')
            cy.get('#author').type('Ricky martin')
            cy.get('#url').type('www.rickydev.com')
            cy.get('#likes').type(1000)

            cy.get('#createNewBlog').click()
            cy.get('.notification').contains('a new blog English for dummies by Ricky martin')
            
            cy.get('#logoutButton').click()
        })
       
    })

    describe('like another user', function() {
        beforeEach(function () {
            cy.get('#username').type('root')
            cy.get('#password').type('root')
            cy.get('#loginButton').click()
        })
        

        it('like', function () {
            cy.contains('view').click()
            cy.get('#likeButton').click()

        })
    })

    describe('delete blog not property', function () {

        it('delete blog not property blog', function() {
           
            cy.get('#removeButton').click()
        })
    })

    
})


