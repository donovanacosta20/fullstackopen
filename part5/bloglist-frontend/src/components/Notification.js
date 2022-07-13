import React from 'react'

const Notification = ({ message, style }) => {
    if (message === null) {
        return null
    }

    return (
        <div style={style}>
            <p>{message}</p>
        </div>
    )
}

export default Notification