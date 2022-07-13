import React, { useState } from 'react'

const CreateBlogForm = ({ createNewBlog }) => {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')
    const [likes, setLikes] = useState(0)

    const handleChangeTitle = (event) => {
        setTitle(event.target.value)
    }

    const handleChangeAuthor = (event) => {
        setAuthor(event.target.value)
    }

    const handleChangeUrl = (event) => {
        setUrl(event.target.value)
    }

    const handleChangeLikes = (event) => {
        setLikes(event.target.value)
    }

    const handleCreateBlogClick =  (event) => {
        event.preventDefault()

        createNewBlog({
            title: title,
            author: author,
            url: url,
            likes: likes
        })
    }


    return (
        <div>
            <h1>create new blog</h1>
            <form>
                <div>
					title:
                    <input type='text' onChange={handleChangeTitle} value={title}/>
                </div>
                <div>
					author:
                    <input type='text' onChange={handleChangeAuthor} value={author}/>
                </div>
                <div>
					url:
                    <input type='text' onChange={handleChangeUrl} value={url}/>
                </div>
                <div>
					likes:
                    <input type='number' onChange={handleChangeLikes} value={likes}/>
                </div>
                <button onClick={handleCreateBlogClick}>create</button>
            </form>
        </div>
    )
}

export default CreateBlogForm