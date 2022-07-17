const AnecdoteForm = ({newAnecdotes}) => {
    return (
       <div>
         <h2>create new</h2>
        <form onSubmit={newAnecdotes}>
          <div><input name='data'/></div>
          <button type='submit'>create</button>
        </form>
       </div>
    )
}


export default AnecdoteForm