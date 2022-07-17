import anecdoteService from '../services/anecdotesService'

const newAnecdote = (anecdote) => {
    return async dispatch => {
        const newAnecdote = await anecdoteService.createAnecdote(anecdote)
        dispatch({
            type: 'NEW',
            anecdote: newAnecdote
        })
    }
}

export default newAnecdote