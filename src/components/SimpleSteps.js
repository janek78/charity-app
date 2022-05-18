import React from 'react';
import { Link } from "react-router-dom";

export const SimpleSteps=()=>{
    return(
        <div className='simple__steps'>
            <h2 className="simple__steps__title">Wystarczą 4 proste kroki</h2>
            <div className='decoration'/>
            <div className='simple__steps__items'>
                < div className='simple__steps__item'>
                    <div className='simple__steps__item__icon icon1'/>
                    <h5 className="simple__steps__item__title">Wybierz rzeczy</h5>
                    <p className="simple__steps__item__description">ubrania, zabawki, sprzęt i inne</p>
                </div>
                < div className='simple__steps__item'>
                    <div className='simple__steps__item__icon icon2'/>
                    <h5 className="simple__steps__item__title">Spakuj je</h5>
                    <p className="simple__steps__item__description">skorzystaj z worków na śmieci</p>
                </div>
                < div className='simple__steps__item'>
                    <div className='simple__steps__item__icon icon3'/>
                    <h5 className="simple__steps__item__title">Zdecyduj komu chcesz pomóc</h5>
                    <p className="simple__steps__item__description">wybierz zaufane miejsce</p>
                </div>
                < div className='simple__steps__item'>
                    <div className='simple__steps__item__icon icon4'/>
                    <h5 className="simple__steps__item__title">Zamów kuriera</h5>
                    <p className="simple__steps__item__description">kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <Link to="/login"><button className="btn">ODDAJ RZECZY</button></Link>
        </div>
    )
}