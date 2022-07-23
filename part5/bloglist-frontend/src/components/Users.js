import { Link, useParams } from 'react-router-dom'

const Users = ({ users }) => {

    const id = useParams().id

    if (!id) {
        return (
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
                    </tbody>)}
            </table>
        )
    }

    const user = users.find(user => user.id === id)

    return (
        <div>
            <h2>{user.name}</h2>
            <h3>added blogs</h3>
            <ul>
                {user.blog.map(item => <li key={item.id}>{item.title}</li>)}
            </ul>
        </div>
    )
}

export default Users