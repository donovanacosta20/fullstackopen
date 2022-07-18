import React from 'react'
import { connect } from 'react-redux'
import AnecdoteList from '../components/AnecdoteList'
import { filterChange } from '../reducers/filterReducer'

const Filter = (props) => {

  const handleChange = (event) => {
    props.filterChange(event.target.value)
  }

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
      <AnecdoteList anecdotes={props.anecdotes} />
    </div>
  )
}

const mapStateToProps = (state) => {
  const test = state.anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(state.filter.toLowerCase()))

  return {
    anecdotes: test,
    filter: state.filter
  }
}

const mapDispatchToProps = { filterChange }

const FilterConnected = connect(mapStateToProps, mapDispatchToProps)(Filter)


export default FilterConnected
