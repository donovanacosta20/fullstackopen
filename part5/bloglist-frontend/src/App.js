import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import blogService from './services/blogs'
import loginService from './services/login'

import Blog from './components/Blog'
import CreateBlogForm from './components/CreateBlogForm'
import LoginForm from './components/LoginForm'
import Notification from './components/Notification'
import Togglable from './components/Togglable'

import { initialBlog, newBlog } from './reducers/blogReducer'
import { logInChange } from './reducers/logInReducer'
import { notificationChange } from './reducers/notificationReducer'

const Logout = ({ name, handleLogout }) => {
    return (
        <div>
            <span>{name} logged in</span>
            <button id='logoutButton' onClick={handleLogout}>logout</button>
        </div>
    )
}

const App = () => {

    let userLog = useSelector(state => state.logIn)

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const [style, setStyle] = useState({
        padding: 10,
        fontSize: 20,
        background: 'lightgray',
        borderStyle: 'solid',
        borderRadius: 5,
        marginBottom: 10
    })

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initialBlog())
    }, [dispatch])

    const createNewBlog = async (blog) => {

        dispatch(newBlog(blog))

        setStyle({ ...style, color: 'green', borderColor: 'green' })
        dispatch(notificationChange(`a new blog ${blog.title} by ${blog.author}`))

        setTimeout(() => {
            dispatch(notificationChange(null))
        }, 5000)
    }

    const handleClickLogin = async (event) => {
        event.preventDefault()

        const user = {
            username: username,
            password: password
        }

        try {
            const response = await loginService.loginIn(user)

            dispatch(logInChange(response))

            setUserName('')
            setPassword('')
        } catch (error) {
            dispatch(notificationChange(`wrong username or password`))
            setStyle({ ...style, color: 'red', borderColor: 'red' })
            setTimeout(() => {

                dispatch(notificationChange(null))

            }, 5000)
        }
    }

    const handleLogoutClick = () => {
        dispatch(logInChange(null))
    }

    if (userLog !== null) {
        blogService.setToken(userLog.token)

        return (

            <div>
                <Logout name={userLog.name} handleLogout={handleLogoutClick} />
                <Notification style={style} />
                <Togglable buttonLabel='new Blog'>
                    <CreateBlogForm createNewBlog={createNewBlog} />
                </Togglable>
                <Blog />
            </div>

        )
    }

    return (
        <div>
            <Notification style={style} />

            <LoginForm handleChangeUsername={({ target }) => setUserName(target.value)} handleChangePassword={({ target }) => setPassword(target.value)} handleClickLogin={handleClickLogin} userName={username} password={password} />
        </div>
    )
}

export default App
