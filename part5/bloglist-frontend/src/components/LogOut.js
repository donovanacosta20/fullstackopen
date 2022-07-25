const LogOut = ({ name, handleLogout }) => {
    return (
        <div>
            <p>{name} logged in</p>
            <button id='logoutButton' onClick={handleLogout}>logout</button>
        </div>
    )
}


export default LogOut