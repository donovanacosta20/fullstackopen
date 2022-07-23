import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/blogs'

const getComments = async (id) => {
    const response = await axios.get(baseUrl + `/${id}`)
    return response.data
}


const postComment = async (comment) => {

    const response = await axios.post(baseUrl + `/${comment.blog}`, comment)

    return response.data
}



// eslint-disable-next-line import/no-anonymous-default-export
export default { postComment, getComments }