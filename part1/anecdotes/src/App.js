import React, { useState } from 'react';

const Display = ({ anecdotes, store, selected }) => {
  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>{store[selected]}</p>
    </div>
  )
}

const Button = ({ handler, text }) => {
  return (
    <button onClick={handler}>
      {text}
    </button>
  )
}

const MaxVote = ({ anecdotes, store }) => {
  return (
    <div>
      <h2> Anecdote with most votes </h2>
      {anecdotes[store.indexOf(Math.max(...store))]}
    </div>
  )
}

const App = (props) => {

  const [selected, setSelected] = useState(0);
  const [store, setStore] = useState(new Array(props.anecdotes.length).fill(0));

  const handleNextAnecdotes = () => {
    setSelected(Math.floor(Math.random() * props.anecdotes.length));
  }

  const handleVote = () => {

    const newStore = [...store];
    newStore[selected] += 1;

    setStore(newStore);
  }

  return (
    <div>

      <Display anecdotes={props.anecdotes} store={store} selected={selected} />
      <Button handler={handleVote} text='Vote' />
      <Button handler={handleNextAnecdotes} text='Next anecdotes' />
      <MaxVote anecdotes={props.anecdotes} store={store} />

    </div>
  )
}

export default App;