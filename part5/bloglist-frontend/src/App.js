import React, { useEffect, useState } from 'react'
import blogService from './services/blogs'
import loginService from './services/login'

import Notification from './components/Notification'

import Togglable from './components/Togglable'
import LoginForm from './components/LoginForm'
import Blog from './components/Blog'
import CreateBlogForm from './components/CreateBlogForm'

const Logout = ({ name, handleLogout }) => {
    return (
        <div>
            <span>{name} logged in</span>
            <button onClick={handleLogout}>logout</button>
        </div>
    )
}



const App = () => {
    const [username,setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)
    const [blogs, setBlogs] = useState([])

    const [message, setMessage] = useState(null)

    const [style, setStyle] = useState({
        padding: 10,
        fontSize: 20,
        background: 'lightgray',
        borderStyle: 'solid',
        borderRadius: 5,
        marginBottom: 10
    })

    useEffect(() => {
        blogService.getAll().then(response => {
            setBlogs(response)
        })
    }, [])

    const createNewBlog = async (newBlog) => {


        blogService.setToken(user.token)

        const newBLog = await blogService.create(newBlog)
        setBlogs(blogs.concat(newBLog))

        setMessage(`a new blog ${newBlog.title} by ${newBlog.author}`)
        setStyle({ ...style, color: 'green', borderColor: 'green' })

        setTimeout(() => {
            setMessage(null)
        },5000)



    }

    const updateLikes = async (blog) => {

        await blogService.updateBlog(blog.id, blog)
        setBlogs([...blogs])

    }

    const deleteBlog = async (blogDelete) => {
        if(window.confirm(`Remove blog ${blogDelete.title} by ${blogDelete.author}`)){
            blogService.setToken(user.token)
            await blogService.deleteBlog(blogDelete.id)

            setBlogs(blogs.filter(blog => blog.id !== blogDelete.id))
        }
    }

    const handleClickLogin = async (event) => {
        event.preventDefault()

        const user = {
            username: username,
            password: password
        }

        try {
            const response = await loginService.loginIn(user)

            setUser(response)

            setUserName('')
            setPassword('')
        } catch (error) {
            setStyle({ ...style, color:'red', borderColor: 'red' })
            setMessage('wrong user or password')

            setTimeout(() => {
                setMessage(null)
            }, 5000)
        }
    }

    const handleLogoutClick = () => {
        setUser(null)
    }

    if(user !== null) {
        return (

            <div>
                <Logout name={user.name} blogs={blogs} handleLogout={handleLogoutClick} />
                <Notification message={message} style={style}/>
                <Togglable buttonLabel='new Note'>

                    <CreateBlogForm createNewBlog={createNewBlog}/>
                </Togglable>
                {blogs.sort((a,b) => a.likes - b.likes).map(blog => <Blog key={blog.id}  blog={blog} name={user.name} updateLikes={updateLikes} deleteBlog={deleteBlog}/>)}
            </div>

        )
    }

    return (
        <div>
            <Notification message={message} style={style}/>

            <LoginForm handleChangeUsername={({ target }) => setUserName(target.value) } handleChangePassword={({ target }) => setPassword(target.value)} handleClickLogin={handleClickLogin} userName={username} password={password}/>
        </div>
    )
}

export default App
