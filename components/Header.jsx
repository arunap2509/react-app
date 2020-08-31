import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => (
    <div>
        <nav className="navbar">
            <Link to="/" ><h2>Expensify App</h2></Link>
            <ul className="nav-links">
                <NavLink to='/create'>Create Expense</NavLink>
            </ul>
        </nav>
    </div>
);

export default Header;