const logInRedurcer = (state = null, action) => {
    if (action.type === 'LOGIN') {
        return action.user
    }

    return state
}

export const logInChange = (user) => {
    return async dispatch => {
        dispatch({
            type: 'LOGIN',
            user
        })
    }
}


export default logInRedurcer