import React from 'react'
import PropTypes from 'prop-types'

const LoginForm = ({
    userName,
    password,
    handleChangeUsername,
    handleChangePassword,
    handleClickLogin }) => {
    return (

        <div>
            <h1>Login</h1>

            <form>
                <div>
					username
                    <input placeholder='input to username' onChange={handleChangeUsername} value={userName}  id='username'/>
                </div>
                <div>
					password
                    <input type='password' placeholder='input to password' onChange={handleChangePassword} value={password} id='password' />
                </div>
                <button id='loginButton' onClick={handleClickLogin}>Login</button>
            </form>
        </div>
    )

}

LoginForm.propTypes = {
    handleChangeUsername: PropTypes.func.isRequired,
    handleChangePassword: PropTypes.func.isRequired,
    handleClickLogin: PropTypes.func.isRequired,
    userName: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
}


export default LoginForm