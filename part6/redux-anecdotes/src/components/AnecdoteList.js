const AnecdoteList = ({anecdotes, vote}) => {
    return anecdotes.sort((a,b)=> a.votes - b.votes).map(anecdote =>
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

export default AnecdoteList