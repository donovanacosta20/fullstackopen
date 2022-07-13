import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/loggin'


const loginIn = (credentials) => {
    const request = axios.post(baseUrl, credentials)

    return request.then(response => response.data)
}



export default { loginIn }