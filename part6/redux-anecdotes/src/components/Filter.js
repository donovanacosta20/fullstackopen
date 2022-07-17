import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'
import AnecdoteList from './AnecdoteList'

const Filter = ({ anecdotes, vote }) => {
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch()

  const handleChange = (event) => {
    dispatch(filterChange(event.target.value))
  }

  const style = {
    marginBottom: 10
  }

  const filterAnecdotes = anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
      <AnecdoteList anecdotes={filterAnecdotes} vote={vote} />
    </div>
  )
}


export default Filter
