import React from 'react';
import { Nav } from './Nav';
import { Link } from 'react-router-dom';

export const Register=()=> {
    return (
        <div className='register'>
            <Nav />
            <div className='register__content'>
                <h1 className='register__header'>Załóż konto</h1>
                <div className='decoration'/>
                <form className='register__form'>
                    <div className='register__form__content'>
                        <label htmlFor='email'>Email</label>
                        <input type='text' name='email'/>
                        <label htmlFor='password'>Hasło</label>
                        <input type='password' name='password'/>
                        <label htmlFor='repeat-password'>Powtórz hasło</label>
                        <input type='password' name='repeat-password'/>
                    </div>
                    <div className='register__form__btns'>
                        <Link to="/login"><button className='form__btn'>Zaloguj się</button></Link>
                        <button type='submit' className='form__btn'>Załóż konto</button>
                    </div>
                </form>
            </div>
        </div>
    )
}