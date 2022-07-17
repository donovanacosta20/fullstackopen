const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      state= {good: state.good++, ...state}
      return state
    case 'OK':
      state= {ok: state.ok++, ...state}
      return state
    case 'BAD':
      state= {bad: state.bad++, ...state}
      return state
    case 'ZERO':
      state = {good: 0, bad: 0, ok:0}
      return state
    default: return state
  }
  
}

export default counterReducer