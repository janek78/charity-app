import React from 'react';
import { Nav } from './Nav';
import { Link } from 'react-router-dom';

export const Login=()=> {
    return (
        <div>
            <div className='login'>
                <Nav />
                <div className='login__content'>
                    <h1 className='login__header'>Zaloguj się</h1>
                    <div className='decoration'/>
                    <form className='login__form'>
                        <div className='login__form__content'>
                            <label htmlFor='email'>Email</label>
                            <input type='text' name='email'/>
                            <label htmlFor='password'>Hasło</label>
                            <input type='password' name='password'/>
                        </div>
                        <div className='login__form__btns'>
                            <Link to="/register"><button className='form__btn'>Załóż konto</button></Link>
                            <button type='submit' className='form__btn'>Zaloguj się</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}