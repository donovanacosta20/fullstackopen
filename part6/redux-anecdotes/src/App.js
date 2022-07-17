import { useDispatch, useSelector } from 'react-redux'
import { initialAnecdotes } from './reducers/anecdoteReducer'
import newAnecdote from './reducers/newAnecdote'
import { notificationChange } from './reducers/notificationReducer'
import voteReducer from './reducers/voteReducer'

import AnecdoteForm from './components/AnecdoteForm'

import { useEffect } from 'react'
import anecdotesService from './services/anecdotesService'

import Filter from './components/Filter'
import Notification from './components/Notification'


const App = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const dispatch = useDispatch()

  useEffect(() => {
    anecdotesService.getAll().then(anecdote => {
      dispatch(initialAnecdotes(anecdote))
    })
  }, [dispatch])

  const vote = (id) => {
    dispatch(voteReducer(id))

    const anecdote = anecdotes.find(anecdote => anecdote.id === id)

    dispatch(notificationChange(`you voted '${anecdote.content}'`))

    setTimeout(() => {
      dispatch(notificationChange(null))
    }, 5000)

  }

  const newAnecdotes = async (event) => {
    event.preventDefault()

    const content = event.target.data.value
    const newNote = await anecdotesService.createAnecdote(content)
    dispatch(newAnecdote(newNote));
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter anecdotes={anecdotes} vote={vote} />
      <AnecdoteForm newAnecdotes={newAnecdotes} />

    </div>
  )
}

export default App