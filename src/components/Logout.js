import React from 'react';
import {Nav} from './Nav';
import {Link} from 'react-router-dom';

export const Logout = () => {
    return (
        <div className='logout'>
            <Nav/>
            <div className='logout__content'>
                <h1 className='logout__header'>Wylogowanie nastąpiło pomyślnie!</h1>
                <div className='decoration'/>
                <Link to='/'>
                    <button className='logout__button'>Strona główna</button>
                </Link>
            </div>
        </div>
    );
};