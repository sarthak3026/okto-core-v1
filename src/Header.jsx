import React from 'react';
import './Header.css'; // Import CSS for header styling
import logoArrow from './assets/logo_arrow.png';


const Header = () => {
    return (
        <header className="header">
            <div className="logo-text">
            <img className="logo logoo-css" src={logoArrow} alt="Logo" />
                <h1 style={{paddingRight: 20}}>okto.</h1>
            </div>
            {/* <nav className='nav-css'>
                <ul className='nav-txt'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Community</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Insights</a></li>
                </ul>
            </nav> */}
            <button className="join-btn">Join Okto</button>
        </header>
    );
}

export default Header;
