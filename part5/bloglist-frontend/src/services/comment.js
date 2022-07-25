import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/blogs'

<<<<<<< HEAD

const getOne = async (id) => {
    const response = await axios.get(baseUrl + `/${id}/comments`)
    return response.data
}

const createComment = async (id, comment) => {
    const response = await axios.post(baseUrl + `/${id}/comments`, comment)
=======
const getComments = async (id) => {
    const response = await axios.get(baseUrl + `/${id}`)
    return response.data
}


const postComment = async (comment) => {

    const response = await axios.post(baseUrl + `/${comment.blog}`, comment)
>>>>>>> 360932f82c17bd5f7b792094a269d8725a6465b8

    return response.data
}


<<<<<<< HEAD
// eslint-disable-next-line import/no-anonymous-default-export
export default { getOne, createComment }
=======

// eslint-disable-next-line import/no-anonymous-default-export
export default { postComment, getComments }
>>>>>>> 360932f82c17bd5f7b792094a269d8725a6465b8
