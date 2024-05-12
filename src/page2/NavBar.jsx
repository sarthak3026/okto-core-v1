import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './NavBar.css';
import NavBtn1 from './../assets/NavBtn1.png';
import NavBtn2 from './../assets/NavBtn2.png';
import NavBtn3 from './../assets/NavBtn3.png';
import NavBtn4 from './../assets/NavBtn4.png';

const Navigation = ({ changeContent }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    const handleButtonClick = (event) => {
        const buttons = document.querySelectorAll('.nav-button2');
        buttons.forEach((button) => {
            button.classList.remove('active2');
        });
        const button = event.currentTarget;
        button.classList.add('active2');
    };
    const handleButtonClickD = (event) => {
        const buttons = document.querySelectorAll('.nav-button2');
        buttons.forEach((button) => {
            button.classList.remove('active2');
        });
        const button = event.currentTarget;
        button.classList.add('active2');
        window.location.href = '/';
    };

    return (
        <nav className={isMobile ? 'mobile-nav' : 'desktop-nav2'} >
            <button onClick={handleButtonClickD} className="nav-button2 notActive">
                <img className='nav-img2' src={NavBtn1} alt='Dashboard Button' />
            </button>
            <button onClick={handleButtonClick} className="nav-button2 active2">
                <img className='nav-img2' src={NavBtn2} alt='Dashboard Button' />
            </button>
            <button onClick={handleButtonClick} className="nav-button2 notActive">
                <img className='nav-img2' src={NavBtn3} alt='Dashboard Button' />
            </button>
            <button onClick={handleButtonClick} className="nav-button2 notActive">
                <img className='nav-img2' src={NavBtn4} alt='Dashboard Button' />
            </button>
            {/* Add other buttons */}
        </nav>
    );
};

export default Navigation;
