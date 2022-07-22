const notificationReducer = (state = null, action) => {
    switch (action.type) {
        case 'NOTIFICATION':
            return action.message
        default:
            return state
    }
}

export const notificationChange = (message) => {
    return ({
        type: 'NOTIFICATION',
        message
    })
}

export default notificationReducer