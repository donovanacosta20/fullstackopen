import React from 'react'
import { connect } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import { likeBlog } from '../reducers/blogReducer'


const Blog = (props) => {

    const blogStyle = {
        paddingTop: 10,
        paddingLeft: 2,
        border: 'solid',
        borderWidth: 1,
        marginBottom: 5
    }

    const id = useParams().id

    if (!id) {
        return props.blogs.sort((a, b) => a.likes - b.likes).map(blog => {
            return (
                <div style={blogStyle} key={blog.id} id={blog.id}>
                    <div>
                        <Link to={`/blogs/${blog.id}`}>{blog.title} {blog.author}</Link>
                    </div>
                </div>
            )
        })
    }

    const blog = props.blogs.find(blog => blog.id === id)
    const user = props.users.find(user => user.id === blog.user)

    const handleLike = () => {

        props.likeBlog({ ...blog, likes: blog.likes += 1 })
    }

    return (
        <div>
            <h2>{blog.title}</h2>
            <a href={blog.url} target='_blank' rel="noreferrer">{blog.url}</a>
            <div>
                <span>{blog.likes}</span>
                <button onClick={handleLike}>like</button>
            </div>

            <p>added by {user.name}</p>
        </div>
    )


}

const mapStateToProps = (state) => {
    return {
        blogs: state.blogs
    }
}

const mapDispatchToState = {
    likeBlog
}

const blogConnected = connect(mapStateToProps, mapDispatchToState)(Blog)


export default blogConnected