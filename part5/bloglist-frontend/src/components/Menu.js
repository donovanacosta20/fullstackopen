import { Link } from 'react-router-dom'

import Logout from './LogOut'

const Menu = ({ name, handleLogOut }) => {
    return (
        <header>
            <Link to='/'>home</Link>
            <Link to='/users'>users</Link>
            <Logout name={name} handleLogOut={handleLogOut} />
        </header>
    )
}


export default Menu