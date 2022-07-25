import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import serviceUsers from '../services/users'

const Users = () => {

    const [users, setUsers] = useState()

    useEffect(() => {
        serviceUsers.getAll().then(response => {
            setUsers(response)
        })
    }, [])

    if (!users) {
        return null
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>blog created</th>
                    </tr>
                </thead>
                {users.map(user =>
                    <tbody key={user.id}>
                        <tr>
                            <td><Link to={`/users/${user.id}`}>{user.name}</Link></td>
                            <td>{user.blog.length}</td>
                        </tr>
                    </tbody>
                )}
            </table>
        </div>
    )
}

export default Users