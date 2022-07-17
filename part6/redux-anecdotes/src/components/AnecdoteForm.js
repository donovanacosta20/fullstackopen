import { useDispatch } from 'react-redux'
import newAnecdote from "../reducers/newAnecdote"
const AnecdoteForm = () => {

  const dispatch = useDispatch()

  const newAnecdotes = async (event) => {
    event.preventDefault()

    const content = event.target.data.value
    event.target.data.value = ''
    dispatch(newAnecdote(content))
  }
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={newAnecdotes}>
        <div><input name='data' /></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}


export default AnecdoteForm