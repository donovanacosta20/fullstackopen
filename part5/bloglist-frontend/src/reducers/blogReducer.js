import serviceBlog from '../services/blogs'

const blogReducer = (state = [], action) => {
    switch (action.type) {
        case 'INITITAL':
            return action.blogs
        case 'NEW':
            return state.concat(action.newBlog)
        case 'REMOVE':
            return state.filter(blog => blog.id !== action.id)
        case 'LIKE':
            return [...state]
        default:
            return state
    }
}

export const initialBlog = () => {
    return async dispatch => {

        dispatch({
            type: 'INITITAL',
            blogs: await serviceBlog.getAll()
        })
    }
}

export const newBlog = (blog) => {
    return async dispatch => {
        dispatch({
            type: 'NEW',
            newBlog: await serviceBlog.create(blog)
        })
    }
}

export const removeBlog = (id) => {
    return async dispatch => {
        dispatch({
            type: 'REMOVE',
            id
        })

        await serviceBlog.deleteBlog(id)
    }
}

export const likeBlog = (blog) => {
    return async dispatch => {
        dispatch({
            type: 'LIKE',
            likeBlog: await serviceBlog.updateBlog(blog.id, blog)
        })

    }
}


export default blogReducer