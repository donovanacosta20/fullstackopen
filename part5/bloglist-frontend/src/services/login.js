import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/loggin'


const loginIn = async (credentials) => {
    const request = await axios.post(baseUrl, credentials)

    return request.data
}


// eslint-disable-next-line
export default { loginIn }