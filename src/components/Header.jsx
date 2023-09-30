import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [darkMode, setDarkMode] = useState(false) 
    const click = darkMode =>{
        setDarkMode(darkMode)
    }
    useEffect(() =>{
        document.body.classList.toggle('darkMode', darkMode)
    }, [darkMode])

    return (
        <header>
            <NavLink to="/">
                <h4>KB</h4>
            </NavLink>
            <nav>
                <NavLink className="nav" end to="/">Home</NavLink>
                <NavLink className="nav" to="/paysage">Gallery</NavLink>
                <NavLink className="nav" to="/highlights">Hightlights</NavLink>
                <div onClick={()=>click(!darkMode)} className="theme"></div>
                {/* <NavLink className="nav" to="/shop">Shop</NavLink> */}
            </nav>
        </header>
    );
};

export default Header;