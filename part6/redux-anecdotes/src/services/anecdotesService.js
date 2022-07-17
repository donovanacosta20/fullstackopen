import axios from "axios"

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)

    return response.data
}

const createAnecdote = async (content) => {

    const newAnecdote = {
        content: content,
        votes: 0
    }
    const response = await axios.post(baseUrl, newAnecdote)

    return response.data
}

const updateAnecdote = async (id, data) => {

    const voted = {
        content: data.content,
        votes: data.votes
    }
    const response = await axios.put(baseUrl + `/${id}`, voted)

    return response.data
}


// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, createAnecdote, updateAnecdote }