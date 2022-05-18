import React from 'react';
import { Nav } from './Nav';
import { Link } from "react-router-dom";

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
                    <Link to="/login"><button className='btn give__things'>ODDAJ RZECZY</button></Link>
                    <Link to="/login"><button className='btn organize__collection'>ZORGANIZUJ ZBIÓRKĘ</button></Link>
                </div>
            </div>
            </div>

        </div>
    )
}