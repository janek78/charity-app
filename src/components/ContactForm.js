import React from 'react';
export const ContactForm=()=>{
    return(

        <div className='contact__form'>
            <div className="form__header">
                <h3 className="form__header__title">Skontaktuj się z nami</h3>
                <div className='decoration'/>
            </div>
            <form className='form__content'>
                <div className='form__content__details'>
                    <label htmlFor="name">
                        Wpisz swoje imię
                        <input type="text" placeholder="Krzysztof"/>
                    </label>
                    <label htmlFor="email">
                        Wpisz swój email
                        <input type="text" placeholder="abc@xyz.pl"/>
                    </label>
                </div>
                <div className="form__content__description">
                    <label htmlFor="message">
                        Wpisz swoją wiadomość
                        <textarea type="text" cols='4' placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        />
                    </label>
                    <div className="form__btn">
                        <button type="submit">Wyślij</button>
                    </div>
                </div>
            </form>

        </div>
    )
}