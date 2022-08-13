import React, {useState} from 'react';

export const ContactForm = () => {
    const contactValues = {name: '', email: '', message: ''};
    const [formValues, setFormValues] = useState(contactValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const clearForm = () => {
        setFormErrors({});
        setFormValues(contactValues);
    };
    const handleChange = e => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errorMsg = validate(formValues);
        if (errorMsg.name === 'Podane imię jest nieprawidłowe!' || errorMsg.email === 'Podany email jest nieprawidłowy!' || errorMsg.message === 'Wiadomość musi mieć conajmniej 120 znaków!' || errorMsg.message === 'Wiadomość jest za krótka') {
            setFormErrors(errorMsg);
            setIsSubmit(false);
            return;
        }
        try {
            const request = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formValues)
            };
            const response = await fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', request);
            const data = await response.json();
            setIsSubmit(true);
            clearForm();
            console.log(data);

        } catch (error) {
            console.log(error);
        }
    };

    const validate = formValues => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!formValues.name) {
            errors.name = 'Podane imię jest nieprawidłowe!';
        }
        if (!formValues.email) {
            errors.email = 'Podany email jest nieprawidłowy!';

        } else if (!regex.test(formValues.email)) {
            errors.email = 'Podany email jest nieprawidłowy!';

        }
        if (!formValues.message) {
            errors.message = 'Wiadomość musi mieć conajmniej 120 znaków!';

        } else if (formValues.message.length < 120) {
            errors.message = 'Wiadomość jest za krótka';

        }
        return errors;
    };

    return (
        <div className='contact-form'>
            <div className='contact-form__header'>
                <h3 className='contact-form__title'>Skontaktuj się z nami</h3>
                <div className='decoration'/>
                {isSubmit && (
                    <>
                        <div className='contact-form__submit-success'>
                            Wiadomość została wysłana!
                        </div>
                        <div className='contact-form__submit-success'>
                            Wkrótce się skontaktujemy.
                        </div>
                    </>
                )}
            </div>
            <form className='contact-form__content' onSubmit={handleSubmit}>
                <div className='contact-form__details'>
                    <label className='contact-form__label' htmlFor='name'>
                        Wpisz swoje imię
                        <input className='contact-form__input' type='text' name='name' id='name' placeholder='Krzysztof'
                               value={formValues.name}
                               onChange={handleChange}/>
                        <p className='contact-form__text'>{formErrors.name}</p>
                    </label>
                    <label className='contact-form__label' htmlFor='email'>
                        Wpisz swój email
                        <input className='contact-form__input' type='text' name='email' id='email'
                               placeholder='abc@xyz.pl' value={formValues.email}
                               onChange={handleChange}/>
                        <p className='contact-form__text'>{formErrors.email}</p>
                    </label>
                </div>
                <div className='contact-form__description'>
                    <label className='contact-form__label' htmlFor='message'>
                        Wpisz swoją wiadomość
                        <textarea className='contact-form__textarea' type='text' name='message' id='message' cols='4'
                                  value={formValues.message}
                                  onChange={handleChange}
                                  placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
                        <p className='contact-form__text'>{formErrors.message}</p>
                    </label>
                    <div className='contact-form__button-position'>
                        <button className='contact-form__button' type='submit'>Wyślij</button>
                    </div>
                </div>
            </form>
        </div>
    );
};