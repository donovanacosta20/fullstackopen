import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import serviceUser from '../services/users'

const UserInfo = () => {

    const id = useParams().id
    const [user, setUser] = useState({})

    useEffect(() => {
        serviceUser.getOneUser(id).then(response => {
            setUser(response)
        })
    }, [id])

    return (
        <div>
            <h1>{user.name}</h1>
            <h2>added blogs</h2>

            <ul>
                {user.blog ? user.blog.map(item => <li key={item.id}>{item.title}</li>) :
                    null}
            </ul>
        </div>
    )

}

export default UserInfo