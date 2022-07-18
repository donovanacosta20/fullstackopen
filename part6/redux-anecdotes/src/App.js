import { useDispatch } from 'react-redux'
import { initialAnecdotes } from './reducers/anecdoteReducer'

import AnecdoteForm from './components/AnecdoteForm'


import { useEffect } from 'react'
import anecdotesService from './services/anecdotesService'

import Filter from './components/Filter'
import Notification from './components/Notification'


const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    anecdotesService.getAll().then(anecdote => {
      dispatch(initialAnecdotes(anecdote))
    })
  }, [dispatch])


  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteForm />

    </div>
  )
}

export default App