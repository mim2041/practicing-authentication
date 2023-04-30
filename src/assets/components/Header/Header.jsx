import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/login1">Login1</Link>
            <Link to="/register">Register</Link>
            <Link to="/registerBS">RegisterBS</Link>
        </nav>
    );
};

export default Header;