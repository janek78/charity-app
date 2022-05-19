import React from 'react';
import { useState } from 'react';

export const ContactForm=()=>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);

    const data={
        name,
        email,
        message
    }

    const handleSubmit =(e)=> {
        e.preventDefault();
        fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
            .then((response) => {
                if (!response.ok) {
                    const responseError = {
                    statusText: response.statusText,
                    status: response.status
                };
                    throw (responseError);
                }
                if(response.status === 200){
                    console.log(response.json());
                    setIsSuccess(true);

                }
            })
            .catch((error) => {
                console.log('error', error.status);
                console.log('error reason', error.statusText);
            });
    }


    return(

        <div className='contact__form'>
            <div className="form__header">
                <h3 className="form__header__title">Skontaktuj się z nami</h3>
                <div className='decoration'/>
                {isSuccess && (
                    <>
                        <div className="contact-form-succes">
                            Wiadomość została wysłana!
                        </div>
                        <div className="contact-form-succes">
                            Wkrótce się skontaktujemy.
                        </div>
                    </>
                )}
            </div>
            <form className='form__content' onSubmit={handleSubmit}>
                <div className='form__content__details'>
                    <label htmlFor="name">
                        Wpisz swoje imię
                        <input type="text" placeholder="Krzysztof" value={name} onChange={(e)=>setName(e.target.value)}/>

                    </label>
                    <label htmlFor="email">
                        Wpisz swój email
                        <input type="text" placeholder="abc@xyz.pl" value={email} onChange={(e)=>setEmail(e.target.value)}/>

                    </label>
                </div>
                <div className="form__content__description">
                    <label htmlFor="message">
                        Wpisz swoją wiadomość
                        <textarea type="text" cols='4'value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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