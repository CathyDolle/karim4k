import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <NavLink to="/">
                <h4>Karim 4K</h4>
                <p>Photography</p>
            </NavLink>
            <nav>
                <NavLink className="nav" end to="/">Home</NavLink>
                <NavLink className="nav" to="/paysage">Gallery</NavLink>
                <NavLink className="nav" to="/highlights">Hightlights</NavLink>
                {/* <NavLink className="nav" to="/shop">Shop</NavLink> */}
            </nav>
        </header>
    );
};

export default Header;