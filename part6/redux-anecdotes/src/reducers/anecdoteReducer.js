const reducer = (state = [], action) => {

  switch (action.type) {
    case 'INITIAL':
      return action.data
    case 'NEW':
      console.log(action.anecdote)
      return state.concat(action.anecdote)
    case 'VOTE':
      const indexAnecdote = state.findIndex(anecdote => anecdote.id === action.id)
      state[indexAnecdote].votes++
      return [...state]
    default:
      return state
  }
}

export const initialAnecdotes = (data) => {
  return {
    type: 'INITIAL',
    data
  }
}

export default reducer