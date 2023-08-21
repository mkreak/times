// NavBar.js
import React from 'react';
import './Navbar.css';

function NavBar() {
    return (
        <nav className="navbar">
            <div className='inner-box'>
                <div className="hamburger">&#9776;</div>
                <div className='menu-btn-inner'></div>
                <h1 className="title">Times</h1>
            </div>
            <div className="search-box">
                <span className="magnifying-glass">&#128269;</span>

                <input type="text" placeholder="Search..." />
            </div>
        </nav>
    );
}

export default NavBar;
