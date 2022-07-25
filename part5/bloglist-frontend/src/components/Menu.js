<<<<<<< HEAD
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

=======
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


>>>>>>> 360932f82c17bd5f7b792094a269d8725a6465b8
export default Menu