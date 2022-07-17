const newAnecdote = (content) => {
    return {
        type: 'NEW',
        data: {
            content: content,
            votes: 0,
            id: Math.random()* 19382901239090
        }
    }
}

export default newAnecdote