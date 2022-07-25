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
    }

    return (
        <div>
            <form>
                <input type='text' onChange={handleOnChangeMessage} value={message} />
                <button onClick={handleAddComment}>add comment</button>
            </form>

            <ul>
                {commentsStore ? commentsStore.map(comment => <li key={comment.id}>{comment.message}</li>) : null}
            </ul>
        </div>
    )
}

export default Comments