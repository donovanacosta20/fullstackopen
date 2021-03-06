import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import { likeBlog } from '../reducers/blogReducer'
import Comments from './Comments'


const Blog = (props) => {

    let id = useParams().id
    const blogInfo = props.blogs.find(blog => blog.id === id)

    useEffect(() => {

    })

<<<<<<< HEAD
    const handleLike = () => {
        props.likeBlog({ ...blogInfo, likes: blogInfo.likes += 1 })
=======
    console.log(blog)

    const handleLike = () => {
        props.likeBlog({ ...blog, likes: blog.likes += 1 })
>>>>>>> 360932f82c17bd5f7b792094a269d8725a6465b8
    }

    if (blogInfo) {

        return (
            <div>
                <h2>{blogInfo.title}</h2>
                <a href={blogInfo.url} target='_blank' rel="noreferrer">{blogInfo.url}</a>
                <div>
                    <span>{blogInfo.likes}</span>
                    <button onClick={handleLike}>like</button>
                </div>

                <p>added by {blogInfo.user.name}</p>

                <Comments idBlog={id} />
            </div>
        )
    }

<<<<<<< HEAD
    return props.blogs.sort((a, b) => a.likes - b.likes).map(blog => {
        return (
            <div key={blog.id} id={blog.id}>
                <div>
                    <Link to={`/blogs/${blog.id}`}>{blog.title} {blog.author}</Link>
                </div>
            </div>
        )
    })
=======
            <p>added by {user.name}</p>

            <Comments blog={blog} />
        </div>
    )
>>>>>>> 360932f82c17bd5f7b792094a269d8725a6465b8
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