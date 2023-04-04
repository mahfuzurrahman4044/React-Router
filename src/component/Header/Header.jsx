import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {

    return (
        <nav>
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/fetch">Fetch</ActiveLink>
            <ActiveLink to="/posts">Posts</ActiveLink>
            <ActiveLink to="/about">About</ActiveLink>
            <ActiveLink to="/contact">Contact</ActiveLink>
        </nav>
    );
};

export default Header;