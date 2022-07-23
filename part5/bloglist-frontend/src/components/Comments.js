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
    }

    return (
        <div>
            <h2>Comments</h2>

            <form>
                <input name='comment' onChange={handleChangeComment} />
                <button onClick={handleAddComment}> add comment</button>
            </form>
            <ul>
                {comments.map(comment => <li key={comment.id}>{comment.comment}</li>)}
            </ul>
        </div >
    )
}

export default Comments