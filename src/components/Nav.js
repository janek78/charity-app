import React from 'react';
import {Link} from 'react-router-dom';
import {Link as ScrollLink} from 'react-scroll/modules';
import {useNavigate} from 'react-router-dom';

export const Nav = () => {
    let navigate = useNavigate();
    const goHome = () => {
        navigate('/');
    };

    return (
        <div className='navigation'>
            <div className='navigation__user'>
                <Link to='/login'>
                    <button className='navigation__user-account'>Zaloguj</button>
                </Link>
                <Link to='/register'>
                    <button className='navigation__user-account'>Załóż konto</button>
                </Link>
            </div>
            <nav className='navigation__links'>
                <ul className='navigation__list-link'>
                    <ScrollLink
                        className='navigation__item-link'
                        to='home'
                        smooth={true}
                        offset={0}
                        duration={600}
                        onClick={goHome}
                    >
                        <li>Start</li>
                    </ScrollLink>
                    <ScrollLink
                        className='navigation__item-link'
                        to='three-columns'
                        smooth={true}
                        offset={0}
                        duration={600}
                        onClick={goHome}
                    >
                        <li>O co chodzi?</li>
                    </ScrollLink>
                    <ScrollLink
                        className='navigation__item-link'
                        to='about-us'
                        smooth={true}
                        offset={0}
                        duration={600}
                        onClick={goHome}
                    >
                        <li>O nas</li>
                    </ScrollLink>
                    <ScrollLink
                        className='navigation__item-link'
                        to='organizations'
                        smooth={true}
                        offset={0}
                        duration={600}
                        onClick={goHome}
                    >
                        <li>Fundacja i organizacje</li>
                    </ScrollLink>
                    <ScrollLink
                        className='navigation__item-link'
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
    );
};