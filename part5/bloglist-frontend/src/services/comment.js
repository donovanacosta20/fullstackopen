import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/blogs'


const getOne = async (id) => {
    const response = await axios.get(baseUrl + `/${id}/comments`)
    return response.data
}

const createComment = async (id, comment) => {
    const response = await axios.post(baseUrl + `/${id}/comments`, comment)

    return response.data
}


// eslint-disable-next-line import/no-anonymous-default-export
export default { getOne, createComment }