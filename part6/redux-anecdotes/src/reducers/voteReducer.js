import anecdotesService from "../services/anecdotesService"

const voteReducer = (id, data) => {
    return async dispatch => {
        dispatch({
            type: 'VOTE',
            id: id
        })

        anecdotesService.updateAnecdote(id, data)
    }
}


export default voteReducer