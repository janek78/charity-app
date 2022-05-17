import React from 'react';
import { Nav } from './Nav';

export const HomeHeader=()=>{
    return(
        <div className="home">
        <div className="home__hero__image"/>
            <div className='home__header'>
            <Nav />
            <div className='home__section'>
                <h2>Zacznij pomagać!</h2>
                <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
                <div className='decoration'/>
                <div className='buttons'>
                    <button className='btn give__things'>ODDAJ RZECZY</button>
                    <button className='btn organize__collection'>ZORGANIZUJ ZBIÓRKĘ</button>
                </div>
            </div>
            </div>

        </div>
    )
}