import { useDispatch, useSelector } from 'react-redux'
import newAnecdote from './reducers/newAnecdote'
import { notificationChange } from './reducers/notificationReducer'
import voteReducer from './reducers/voteReducer'

import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'

import Filter from './components/Filter'
import Notification from './components/Notification'

const App = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(voteReducer(id))

    const anecdote = anecdotes.find(anecdote => anecdote.id === id)

    dispatch(notificationChange(`you voted '${anecdote.content}'`))

    setTimeout(() => {
      dispatch(notificationChange(null))
    }, 5000)

  }

  const newAnecdotes = (event) => {
    event.preventDefault()

    const content = event.target.data.value

    dispatch(newAnecdote(content));
  }

  return (
    <div>
      <Notification />
      <h2>Anecdotes</h2>
      <Filter anecdotes={anecdotes} />
      <AnecdoteForm newAnecdotes={newAnecdotes} />
      <AnecdoteList anecdotes={anecdotes} vote={vote} />

    </div>
  )
}

export default App