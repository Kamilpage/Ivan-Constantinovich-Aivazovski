import React from 'react';
import '../style/main.css'

const Header = () => {
    return (
        <section className='header'>

            <div className='container'>
                <div className="nav-section">
                <div className="nav-links">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">History</a>
                    <a href="#">Portfolio</a>
                    <a href="#">Contacts</a>
                </div>
                <hr/>
                </div>
            </div>
        </section>
    );
};

export default Header;