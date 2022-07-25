import PropTypes from 'prop-types'
import React from 'react'

const LoginForm = ({
    userName,
    password,
    handleChangeUsername,
    handleChangePassword,
    handleClickLogin }) => {

    return (

        <div className='loginForm'>
            <h1>Login</h1>

            <form className='loginForm__form'>
                <div className='loginForm__input'>
                    username
                    <input placeholder='input to username' onChange={handleChangeUsername} value={userName} id='username' />
                </div>
                <div className='loginForm__input'>
                    password
                    <input type='password' placeholder='input to password' onChange={handleChangePassword} value={password} id='password' />
                </div>
                <button className='loginForm__button' id='loginButton' onClick={handleClickLogin}>Login</button>
            </form >
        </div >
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