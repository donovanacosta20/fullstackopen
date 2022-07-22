import React from 'react'

import { useSelector } from 'react-redux/es/exports'

const Notification = ({ style }) => {
    const message = useSelector(state => state.notification)

    if (message === null) {
        return null
    }

    return (
        <div style={style} className='notification'>
            <p>{message}</p>
        </div>
    )
}

export default Notification