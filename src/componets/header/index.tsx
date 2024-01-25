import React, {useState} from 'react';
import "./style.scss";

export const Header = () => {

    const [ mobileMenu, setMobileMenu ] = useState('');

    const funcOpenMenu = () => {
        if(mobileMenu === 'active') {
            setMobileMenu('');
        } else {
            setMobileMenu('active');
        }
    }

    return (
        <section id="header">
            <div className="wrapper">

                <div className="menuHeader">
                    <div className="logoHeader">
                        <a href="/"><h1>IHelp</h1></a>
                    </div>
                    <ul>
                        <li><a href="/search">Find service</a></li>
                        <li><a href="">Suport</a></li>
                        <li><a href="">About us</a></li>
                    </ul>
                </div>

                <div className="loginHeader">
                    <a href="/createaccount">Create account</a>
                    <a href="/login" className='loginButton'>Login</a>
                </div>

                <div className="mobileMenu">
                    <div className="iconMenu" onClick={funcOpenMenu}>
                        <img src={require('../../assets/image/menu-open.png')} alt="menu" />
                    </div>

                    <div id="menuContentMobile" className={mobileMenu}>
                        <div className="closeMenu" onClick={funcOpenMenu}>
                            <img src={require('../../assets/image/menu-close.png')} alt="close menu" />
                        </div>
                        
                        <div className="logoHeaderMobile">
                            <a href="/"><h1>IHelp</h1></a>
                        </div>

                        <ul>
                            <li><a href="/search">Find service</a></li>
                            <li><a href="#">Suport</a></li>
                            <li><a href="#">About us</a></li>
                            <li className='loginMobile'><a href="/login">Login in</a><a href="/createAccount">Create account</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}