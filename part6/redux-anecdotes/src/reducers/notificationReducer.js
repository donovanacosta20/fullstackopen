const notificationReducer = (state = null, action) => {
   switch (action.type) {

      case 'NOTIFICATION':
         return action.message
      default:
         return state
   }
}


export const notificationChange = (message, seg) => {
   return async dispatch => {

      dispatch({
         type: 'NOTIFICATION',
         message: message
      })


      setTimeout(() => {
         dispatch({
            type: 'NOTIFICATION',
            message: null
         })
      }, 1000 * seg)

   }
}

export default notificationReducer