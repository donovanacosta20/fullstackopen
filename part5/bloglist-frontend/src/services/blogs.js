import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/blogs'


let token = null
const setToken = newToken => token = `bearer ${newToken}`


const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = (blog) => {

    const config = {
        headers: { Authorization: token }
    }
    const request = axios.post(baseUrl, blog, config)

    return request.then(response => response.data)
}

const updateBlog = (id,blog) => {
    const request = axios.put(baseUrl + `/${id}`, blog)
    return request.then(response => response.data)
}

const deleteBlog = (id) => {
    const config = {
        headers: { Authorization: token }
    }
    const request = axios.delete(baseUrl+`/${id}`, config)

    return request.then(response => response.data)
}

export default { getAll, create, updateBlog , deleteBlog ,setToken }