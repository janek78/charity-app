import React, { useState } from 'react';
import { Nav } from './Nav';
import { Link } from 'react-router-dom';


export const Login=()=> {
    const loginValues = {email: "", password: "" };
    const [formValues, setFormValues] = useState(loginValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const clearForm=()=>{
        setFormErrors({});
        setFormValues(loginValues);
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }
    const handleSubmit = e => {
        e.preventDefault()
        const errorMsg = validate(formValues);

        if (errorMsg.email === 'Puste pole, wpisz email!' || errorMsg.email === 'Podany email jest nieprawidłowy!' || errorMsg.password === 'Puste pole, wpisz hasło!' || errorMsg.password === 'Hasło musi miec conajmniej 8 znaków!') {
            setFormErrors(errorMsg);
            console.log(errorMsg);
            setIsSubmit(false);
            return
        }else{
          clearForm()
          setIsSubmit(true);
      }
    }

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
        return errors;
    };
    return (
        <div>
            <div className='login'>
                <Nav />
                <div className='login__content'>
                    <h1 className='login__header'>Zaloguj się</h1>
                    <div className='decoration'/>
                    {isSubmit && (<div className="submit__success">Zalogowany</div>)}
                    <form className='login__form' onSubmit={handleSubmit}>
                        <div className='login__form__content'>
                            <label htmlFor='email'>Email
                                <input type='text' name='email' value={formValues.email} onChange={handleChange} className= {formErrors.email ? 'border__color__red' : 'border__color__normal'}/>
                                <p>{formErrors.email}</p>
                            </label>
                                <label htmlFor='password'>Hasło
                                <input type='password' name='password' value={formValues.password} onChange={handleChange} className= {formErrors.password ? 'border__color__red' : 'border__color__normal'}/>
                            <p>{formErrors.password}</p>
                            </label>
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