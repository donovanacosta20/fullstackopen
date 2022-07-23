import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import blogReducer from '../reducers/blogReducer'
import logInRedurcer from '../reducers/logInReducer'
import notificationReducer from '../reducers/notificationReducer'

const reducer = combineReducers({
    blogs: blogReducer,
    notification: notificationReducer,
    logIn: logInRedurcer,
})

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store