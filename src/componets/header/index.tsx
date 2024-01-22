import React from 'react';
import "./style.scss";

export const Header = () => {
  return (
    <section id="header">
        <div className="wrapper">

            <div className="menuHeader">
                <div className="logoHeader">
                    <a href="/"><h1>IHelp</h1></a>
                </div>
                <ul>
                    <li><a href="">Find service</a></li>
                    <li><a href="">Suport</a></li>
                    <li><a href="">About us</a></li>
                </ul>
            </div>

            <div className="loginHeader">
                <a href="">Create account</a>
                <a href="" className='loginButton'>Login</a>
            </div>
        </div>
    </section>
  )
}