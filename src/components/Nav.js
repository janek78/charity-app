import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll/modules';
import { useNavigate } from 'react-router-dom';

export const Nav=()=> {
    let navigate=useNavigate();
    const goHome=()=>{
    navigate('/')
    }

    return (
        <div className='navigation'>
            <div className='nav__user'>
                <Link to='/login'><button className='user__account'>Zaloguj</button></Link>
                <Link to='/register'><button className='user__create__account'>Załóż konto</button></Link>
            </div>
            <nav className='nav__links'>
                <ul>
                    <ScrollLink
                        className='nav__links__link'
                        to='home'
                        smooth={true}
                        offset={0}
                        duration={600}
                        onClick={goHome}
                    >
                    <li>Start</li>
                    </ScrollLink>
                    <ScrollLink
                        className='nav__links__link'
                        to='three__columns'
                        smooth={true}
                        offset={0}
                        duration={600}
                        onClick={goHome}
                    >
                    <li>O co chodzi?</li>
                    </ScrollLink>
                    <ScrollLink
                        className='nav__links__link'
                        to='about__us'
                        smooth={true}
                        offset={0}
                        duration={600}
                        onClick={goHome}
                    >
                    <li>O nas</li>
                    </ScrollLink>
                    <ScrollLink
                        className='nav__links__link'
                        to='organizations'
                        smooth={true}
                        offset={0}
                        duration={600}
                        onClick={goHome}
                    >
                    <li>Fundacja i organizacje</li>
                    </ScrollLink>
                    <ScrollLink
                        className='nav__links__link'
                        to='contact'
                        smooth={true}
                        offset={0}
                        duration={600}
                        onClick={goHome}
                    >
                    <li>Kontakt</li>
                    </ScrollLink>
                </ul>
            </nav>
        </div>
    )
}