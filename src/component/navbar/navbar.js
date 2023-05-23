import React, { useState } from 'react';
import navbar from './navbar.css';
import { FaInstagramSquare, FaYoutubeSquare, FaGithubSquare, FaLinkedinIn } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';


const Navbar =() => {
    const [showMediaIcons, setShowMediaIcons] =  useState(false);
    return(
        <>
            <nav className = "main-nav">
                {/*1st logo part*/}

                <div className = "logo">
                    <h2>
                        <span>A</span>yaj
                        <span>A</span>nand
                    </h2>
                </div>

                {/*2nd menu part*/}

                <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
                    <ul>
                        <li>
                            <a href ='#'>Home</a>
                        </li>

                        <li>
                            <a href ='#'>About</a>
                        </li>

                        <li>
                            <a href ='#'>Services</a>
                        </li>

                        <li>
                            <a href ='#'>Contact Us</a>
                        </li>

                    </ul>
                </div>

                {/*3rd Social Media Links... */}

                <div className='social-media'>
                    <ul className='social-media-desktop'>
                    <li>
                        <a href="https://www.youtube.com/channel/UCeqM1aLZSGDyxcbZ65c_bWw"
                        target="_blank"><FaYoutubeSquare className="youtube"/></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/da.anandz/"
                        target="_blank"><FaInstagramSquare className="instagram" /></a>
                    </li>
                    <li>
                        <a href="https://github.com/ayajanandz"
                        target="_blank"><FaGithubSquare className="github" /></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/ayaj-anand-492986127/"
                        target="_blank"><FaLinkedinIn className="linkedin" /></a>
                    </li>
                    </ul>

                    {/* Hamburger-menu*/}

                    <div className='hamburger-menu'>
                        <a href="#" onClick={() => setShowMediaIcons( !showMediaIcons)}>
                            <GiHamburgerMenu/>
                        </a>
                    </div>
                </div>
            </nav>

           
        </>
    );
};

export default Navbar;