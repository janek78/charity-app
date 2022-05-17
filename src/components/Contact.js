import React from 'react';
import { ContactForm } from "./ContactForm";
import facebook from "../assets/Facebook.svg";
import instagram from "../assets/Instagram.svg";

export const Contact=()=> {
    return (
        <div className="contact">
            <div className='contact__container'>
                <div className='contact__container__form'>
                    <ContactForm />
                </div>
                <div className="contact__footer">
                    <div className="contact__footer__copyright">Copyright by Coders Lab</div>
                    <div className="contact__footer__icons">
                        <a href="https://https://www.facebook.com/">
                            <img src={facebook} alt="facebook" />
                        </a>
                        <a href="https://www.instagram.com/">
                            <img src={instagram} alt="instagram" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}