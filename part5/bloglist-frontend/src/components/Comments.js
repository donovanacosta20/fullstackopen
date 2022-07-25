<<<<<<< HEAD
import { useEffect, useState } from 'react'
import serviceComment from '../services/comment'

const Comments = ({ idBlog }) => {

    const [message, setMessage] = useState('')
    const [commentsStore, setCommentsStore] = useState([])

    useEffect(() => {
        serviceComment.getOne(idBlog).then(response => {
            setCommentsStore(response)
        })
    }, [idBlog])

    const handleAddComment = async (event) => {

        event.preventDefault()

        const newCommentObject = {
            message: message,
            blog: idBlog
        }

        await serviceComment.createComment(idBlog, newCommentObject).then(response => {
            setCommentsStore(commentsStore.concat(response))
        })
        setMessage('')
    }

    const handleOnChangeMessage = (event) => {
        setMessage(event.target.value)
=======
import { useEffect, useState } from "react"
import commentService from "../services/comment"

const Comments = ({ blog }) => {

    const [comment, setComment] = useState('')
    const [comments, setComments] = useState([])

    useEffect(() => {
        commentService.getComments(blog.id).then(response => {
            setComments(response)
        })
    }, [blog.id])

    const handleChangeComment = (event) => {
        setComment(event.target.value)
    }

    const handleAddComment = async (event) => {
        event.preventDefault()

        const newComment = {
            comment: comment,
            blog: blog.id
        }

        const response = await commentService.postComment(newComment)

        setComments(comments.concat(response))
>>>>>>> 360932f82c17bd5f7b792094a269d8725a6465b8
    }

    return (
        <div>
<<<<<<< HEAD
            <form>
                <input type='text' onChange={handleOnChangeMessage} value={message} />
                <button onClick={handleAddComment}>add comment</button>
            </form>

            <ul>
                {commentsStore ? commentsStore.map(comment => <li key={comment.id}>{comment.message}</li>) : null}
            </ul>
        </div>
=======
            <h2>Comments</h2>

            <form>
                <input name='comment' onChange={handleChangeComment} />
                <button onClick={handleAddComment}> add comment</button>
            </form>
            <ul>
                {comments.map(comment => <li key={comment.id}>{comment.comment}</li>)}
            </ul>
        </div >
>>>>>>> 360932f82c17bd5f7b792094a269d8725a6465b8
    )
}

export default Comments