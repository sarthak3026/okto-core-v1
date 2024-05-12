import React, { useState } from "react";
import './MainContent2.css';
import Footer from './Footer';
import { useMediaQuery } from 'react-responsive';
import Section1Img from './assets/section1.png';
import Section2txt from './assets/section2Txt.png';
import Section3htxt from './assets/section3htxt.png';
import Section3card from './assets/section3card.png';
import Section4img from './assets/section4img.png';
import Header from "../Header";

const MainContent2 = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return (
        <>
        <Header/>
            <img className='section1' src={Section1Img} />
            <div className="section2">
                <center>
                    <img className='section2txt' src={Section2txt} /><br />
                    <button className="section2btn"> Let's Get Started </button>
                </center>
            </div>
            <div className="section3">
                <div style={{ display: 'flex' }}>
                    <img className='section3htxt' src={Section3htxt} />
                    <div className="get-started-button">
                        <button
                            kind="elevated"
                            size="big"
                            className="get-started-button-des"
                        >
                            Let's Get Started
                        </button>
                    </div>
                </div>
            </div>
            <img className='section3card' src={Section3card} />
            <div style={{ width: '100%', position: 'relative' }}>
                <img className='section3card' src={Section4img} />
                <button className="section4btn"> Let's Get Started </button>
            </div>
            <Footer />
        </>
    )
}

export default MainContent2;