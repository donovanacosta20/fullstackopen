import React, { useState } from 'react'
import { connect } from 'react-redux'

import { likeBlog, removeBlog } from '../reducers/blogReducer'

const Blog = (props) => {

    const [visible, setVisible] = useState(false)
    const [moreInformation, setMoreInformation] = useState({ display: 'none' })

    const blogStyle = {
        paddingTop: 10,
        paddingLeft: 2,
        border: 'solid',
        borderWidth: 1,
        marginBottom: 5
    }

    const handleIsVisible = () => {
        setVisible(!visible)

        if (!visible) {
            setMoreInformation({ display: 'block' })
        } else {
            setMoreInformation({ display: 'none' })
        }
    }

    const getBlog = (id) => props.blogs.find(blog => blog.id === id)

    const handleClickLikes = async (event) => {

        const blog = getBlog(event.target.parentNode.parentNode.id)

        props.likeBlog({
            id: blog.id,
            title: blog.title,
            author: blog.author,
            url: blog.url,
            likes: blog.likes += 1
        })
    }

    const handleClickDelete = (event) => {

        const blog = getBlog(event.target.parentNode.parentNode.id)

        if (window.confirm(`Remove blog ${blog.title} by ${blog.author}`)) {
            props.removeBlog(blog.id)
        }
    }

    return props.blogs.sort((a, b) => a.likes - b.likes).map(blog => {
        return (
            <div style={blogStyle} key={blog.id} id={blog.id}>
                <div>
                    <span>{blog.title} {blog.author}</span>
                    <button onClick={handleIsVisible}>show</button>
                </div>
                <div style={moreInformation}>
                    <p> url: {blog.url}</p>
                    <p>user: {blog.user}</p>
                    <span>likes: {blog.likes}</span>
                    <button id='likeButton' onClick={handleClickLikes}>like</button>
                    <button id='removeButton' onClick={handleClickDelete}>remove</button>
                </div>
            </div>
        )
    })
}

const mapStateToProps = (state) => {
    return {
        blogs: state.blogs
    }
}

const mapDispatchToProps = {
    likeBlog,
    removeBlog
}

const blogConnected = connect(mapStateToProps, mapDispatchToProps)(Blog)


export default blogConnected