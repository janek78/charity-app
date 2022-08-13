import React, {useState} from 'react';
import {Nav} from './Nav';
import {Link} from 'react-router-dom';

export const Register = () => {

    const registerValues = {email: '', password: '', repeatPassword: ''};
    const [formValues, setFormValues] = useState(registerValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const clearForm = () => {
        setFormErrors({});
        setFormValues(registerValues);
    };

    const handleChange = e => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
    };

    const handleSubmit = e => {
        e.preventDefault();
        const errorMsg = validate(formValues);
        if (errorMsg.email === 'Puste pole, wpisz email!' || errorMsg.email === 'Podany email jest nieprawidłowy!' || errorMsg.password === 'Puste pole, wpisz hasło!' || errorMsg.password === 'Hasło musi miec conajmniej 8 znaków!' || errorMsg.repeatPassword === 'Hasła nie jest identyczne') {
            setFormErrors(errorMsg);
            console.log(errorMsg);
            setIsSubmit(false);
            return;
        } else {
            clearForm();
            setIsSubmit(true);
        }
    };

    const validate = formValues => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!formValues.email) {
            errors.email = 'Puste pole, wpisz email!';
        } else if (!regex.test(formValues.email)) {
            errors.email = 'Podany email jest nieprawidłowy!';
        }
        if (!formValues.password) {
            errors.password = 'Puste pole, wpisz hasło!';
        } else if (formValues.password.length < 8) {
            errors.password = 'Hasło musi miec conajmniej 8 znaków!';
        }
        if (formValues.repeatPassword !== formValues.password) {
            errors.repeatPassword = 'Hasła nie jest identyczne';
        }
        return errors;
    };

    return (
        <div className='register'>
            <Nav/>
            <div className='register__content'>
                <h1 className='register__header'>Załóż konto</h1>
                <div className='decoration'/>
                {isSubmit && (<div className='register__submit-success'>Zarejestrowałeś konto</div>)}
                <form className='register__form' onSubmit={handleSubmit}>
                    <div className='register__form-content'>
                        <label className='register__form-label' htmlFor='email'>Email
                            <input type='text' name='email' value={formValues.email} onChange={handleChange}
                                   className={formErrors.email ? 'register__form-input register__form-input--red' : 'register__form-input'}/>
                            <p className='register__form-text'>{formErrors.email}</p>
                        </label>
                        <label className='register__form-label' htmlFor='password'>Hasło
                            <input type='password' name='password' value={formValues.password} onChange={handleChange}
                                   className={formErrors.password ? 'register__form-input register__form-input--red' : 'register__form-input'}/>
                            <p className='register__form-text'>{formErrors.password}</p>
                        </label>
                        <label className='register__form-label' htmlFor='repeatPassword'>Powtórz hasło
                            <input type='password' name='repeatPassword' value={formValues.repeatPassword}
                                   onChange={handleChange}
                                   className={formErrors.repeatPassword ? 'register__form-input register__form-input--red' : 'register__form-input'}/>
                            <p className='register__form-text'>{formErrors.repeatPassword}</p>
                        </label>
                    </div>
                    <div className='register__form-buttons'>
                        <Link to='/login'>
                            <button className='register__form-button'>Zaloguj się</button>
                        </Link>
                        <button type='submit' className='register__form-button'>Załóż konto</button>
                    </div>
                </form>
            </div>
        </div>
    );
};