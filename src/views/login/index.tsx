import React from 'react';
import "./style.scss"

const Login = () => {
  return (
    <div id='login'>
        <div className="loginContent">
            <div className="storeLogo">
                <a href="/"><img src={require('../../assets/image/logo.png')} alt="Rent service" /></a>
            </div>
            <div className="loginFormContent">
                <div className="serverCode">
                    <label htmlFor="servercode">Server code</label>
                    <input type="text" id='servercode'/>
                    <button>Login</button>
                </div>
                <div className="loginForm">
                    <div className="loginFormTitle">
                        <h2>Welcome Back!</h2>
                        <p>Login to manager your account</p>
                    </div>
                    <div className="loginFormInput">
                        <label htmlFor="email">Email</label>
                        <input type="text" id='email' />
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' />
                        <button>Login</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login