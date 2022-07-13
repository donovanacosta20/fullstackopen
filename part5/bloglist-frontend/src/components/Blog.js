import React, { useState } from 'react'

const Blog = ({ blog, name, updateLikes, deleteBlog }) => {

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

        if(!visible) {
            setMoreInformation({ display: 'block' })
        }else {
            setMoreInformation({ display: 'none' })
        }
    }

    const handleClickLikes = () => {

        updateLikes({
            id: blog.id,
            title: blog.title,
            author: blog.author,
            url: blog.url,
            likes: blog.likes++
        })
    }

    const handleClickDelete = () => {
        deleteBlog({
            id: blog.id,
            title: blog.title,
            author: blog.author
        })
    }

    return  (
        <div style={blogStyle}>
            <div className='blog'>
                <span> {blog.title} {blog.author}</span>
                <button onClick={handleIsVisible}>{visible ? 'hidden' : 'view'}</button>
            </div>

            <div style={moreInformation}>
                <p>{blog.url}</p>
                <span>likes: {blog.likes}</span>
                <button onClick={handleClickLikes}>like</button>
                <p>{name}</p>
                <button onClick={handleClickDelete}>remove</button>
            </div>
        </div>
    )
}
export default Blog