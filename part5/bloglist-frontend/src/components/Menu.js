import { Link } from "react-router-dom"

import Logout from './Logout'

const Menu = ({ name, handleLogout }) => {
    return (
        <div>
            <Link to='/'>home</Link>
            <Link to='/users'>users</Link>
            <Logout name={name} handleLogout={handleLogout} />
        </div>
    )
}

export default Menu