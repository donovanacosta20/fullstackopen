import { connect } from 'react-redux'
import newAnecdote from "../reducers/newAnecdote"
const AnecdoteForm = (props) => {

  const newAnecdotes = async (event) => {
    event.preventDefault()

    const content = event.target.data.value
    event.target.data.value = ''
    props.newAnecdote(content)
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

const mapDispatchToProps = {
  newAnecdote
}


const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm)

export default ConnectedAnecdoteForm