import { useDispatch, useSelector } from 'react-redux'
import { initialAnecdotes } from './reducers/anecdoteReducer'
import { notificationChange } from './reducers/notificationReducer'

import AnecdoteForm from './components/AnecdoteForm'

import { useEffect } from 'react'
import anecdotesService from './services/anecdotesService'

import Filter from './components/Filter'
import Notification from './components/Notification'
import voteReducer from './reducers/voteReducer'


const App = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const dispatch = useDispatch()

  useEffect(() => {
    anecdotesService.getAll().then(anecdote => {
      dispatch(initialAnecdotes(anecdote))
    })
  }, [dispatch])

  const vote = async (id) => {

    const anecdote = anecdotes.find(anecdote => anecdote.id === id)
    dispatch(voteReducer(id, anecdote))

    dispatch(notificationChange(`you voted '${anecdote.content}'`), 5)
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter anecdotes={anecdotes} vote={vote} />
      <AnecdoteForm />

    </div>
  )
}

export default App