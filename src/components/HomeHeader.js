import React from 'react';
import {Nav} from './Nav';
import {Link} from 'react-router-dom';

export const HomeHeader = () => {
    return (
        <div className='home'>
            <div className='home__image'/>
            <div className='home__header'>
                <Nav/>
                <div className='home__section'>
                    <h2 className='home__title'>Zacznij pomagać!</h2>
                    <h2 className='home__title'>Oddaj niechciane rzeczy w zaufane ręce</h2>
                    <div className='decoration'/>
                    <div className='home__buttons'>
                        <Link to='/login'>
                            <button className='home__button'>ODDAJ RZECZY</button>
                        </Link>
                        <Link to='/login'>
                            <button className='home__button'>ZORGANIZUJ ZBIÓRKĘ</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};