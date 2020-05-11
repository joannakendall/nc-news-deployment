import React from 'react';
//import styled from '../css/Header.module.css'

const Header = ({user}) => {
    return (
        <header className='header'>
            <h1>NORTHCODERS NEWS!</h1>
            <h2>You are logged in as {user}</h2>
        </header>
    );
};

export default Header;