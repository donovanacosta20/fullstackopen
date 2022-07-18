import { connect } from 'react-redux'
import { notificationChange } from '../reducers/notificationReducer'
import voteReducer from '../reducers/voteReducer'

const AnecdoteList = (props) => {

  console.log(props)

  const vote = async (id) => {

    const anecdote = props.anecdotes.find(anecdote => anecdote.id === id)
    props.voteReducer(id, anecdote)

    props.notificationChange(`you voted '${anecdote.content}'`, 5)
  }

  return props.anecdotes.sort((a, b) => a.votes - b.votes).map(anecdote =>
    <div key={anecdote.id}>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={() => vote(anecdote.id)}>vote</button>
      </div>
    </div>
  )
}

const mapDispatchToProps = { voteReducer, notificationChange }

const ConnectedAnecdotes = connect(null, mapDispatchToProps)(AnecdoteList)

export default ConnectedAnecdotes