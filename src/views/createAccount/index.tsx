import React from 'react';
import "./style.scss"

const CreateAccount = () => {
    return (
        <section id='createAccountPage'>
            <div className="logoHeader">
                <a href="/"><h1>IHelp</h1></a>
            </div>
            <div className="createAccountContent">
                <h2>Create account:</h2>
                <div className="formAccount">
                    <input type="email" required id="firsname" placeholder='First name'/>
                    <input type="email" required id="lastname" placeholder='Last name'/>
                    <input type="email" required id="Email" placeholder='exemplo@exemplo.com'/>
                    <input type="password" required id="password" placeholder='******'/>
                    <button>Create</button>
                </div>
                <div className="loginHelp">
                    <p>Already have an account?<a href="/login"> Sign in</a></p>
                </div>
            </div>
            <div className="loginBanner">
                <img src={require('../../assets/image/loginpage.png')} alt="Login iHelp" />
            </div>
        </section>
    )
}

export default CreateAccount