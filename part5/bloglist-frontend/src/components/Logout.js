const Logout = ({ name, handleLogout }) => {
    return (
        <div>
            <span>{name} logged in</span>
            <button id='logoutButton' onClick={handleLogout}>logout</button>
        </div>
    )
}



export default Logout