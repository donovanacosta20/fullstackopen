import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/blogs'


let token = null
const setToken = newToken => token = `bearer ${newToken}`


const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const getOne = async (id) => {
    const response = await axios.get(baseUrl + `/${id}`)

    return response.data
}

const create = async (blog) => {

    const config = {
        headers: { Authorization: token }
    }
    const response = await axios.post(baseUrl, blog, config)

    return response.data
}

const updateBlog = async (id, blog) => {
    const response = await axios.put(baseUrl + `/${id}`, blog)
    return response.data
}

const deleteBlog = async (id) => {
    const config = {
        headers: { Authorization: token }
    }
    const response = await axios.delete(baseUrl + `/${id}`, config)

    return response.data
}
// eslint-disable-next-line
export default { getAll, create, updateBlog, deleteBlog, setToken, getOne }