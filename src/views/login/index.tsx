import React from 'react';
import "./style.scss"

const Login = () => {
    return (
        <section id='loginPage'>
            <div className="logoHeader">
                <a href="/"><h1>IHelp</h1></a>
            </div>
            <div className="loginContent">
                <h2>Log in:</h2>
                <div className="formLogin">
                    <input type="email" required id="emailLogin" placeholder='exemplo@exemplo.com'/>
                    <input type="password" required id="passwordLogin" placeholder='******'/>
                    <button>Login</button>
                </div>
                <div className="loginHelp">
                    <a href="/">Forgot your password?</a>
                    <a href="/createaccount">Create an account.</a>
                </div>
            </div>
            <div className="loginBanner">
                <img src={require('../../assets/image/loginpage.png')} alt="Login iHelp" />
            </div>
        </section>
    )
}

export default Login