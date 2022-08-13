import React from 'react';
import {Link} from 'react-router-dom';

export const SimpleSteps = () => {
    return (
        <div className='simple-steps'>
            <h2 className='simple-steps__title'>Wystarczą 4 proste kroki</h2>
            <div className='decoration'/>
            <div className='simple-steps__items'>
                < div className='simple-steps__item'>
                    <div className='simple-steps__item-icon simple-steps__item-icon--icon1'/>
                    <h5 className='simple-steps__item-title'>Wybierz rzeczy</h5>
                    <p className='simple-steps__item-description'>ubrania, zabawki, sprzęt i inne</p>
                </div>
                < div className='simple-steps__item'>
                    <div className='simple-steps__item-icon simple-steps__item-icon--icon2'/>
                    <h5 className='simple-steps__item-title'>Spakuj je</h5>
                    <p className='simple-steps__item-description'>skorzystaj z worków na śmieci</p>
                </div>
                < div className='simple-steps__item'>
                    <div className='simple-steps__item-icon simple-steps__item-icon--icon3'/>
                    <h5 className='simple-steps__item-title'>Zdecyduj komu chcesz pomóc</h5>
                    <p className='simple-steps__item-description'>wybierz zaufane miejsce</p>
                </div>
                < div className='simple-steps__item'>
                    <div className='simple-steps__item-icon simple-steps__item-icon--icon4'/>
                    <h5 className='simple-steps__item-title'>Zamów kuriera</h5>
                    <p className='simple-steps__item-description'>kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <Link to='/login'>
                <button className='simple-steps__button'>ODDAJ RZECZY</button>
            </Link>
        </div>
    );
};