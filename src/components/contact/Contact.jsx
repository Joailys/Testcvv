import React, { useRef } from 'react';
import './contact.css'
import emailjs from '@emailjs/browser';
import { AiOutlineSend } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'
import { AiFillPhone } from 'react-icons/ai'
import { GiPositionMarker } from 'react-icons/gi'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_knk6cmr', 'template_ys7v14g', form.current, '9G-IUbV8veeuzT-Cx')
    e.target.reset()
  };

  return (

    <div className='container-contact' id='contact'>
      <div className='title-container'>
        <h2>
          <span>05.</span>
          Contact
        </h2>
      </div>

      <div className='container-form'>

        <div className='informations'>
          <div>
            <h3>E-mail<AiOutlineMail /></h3>
            <a href='mailto:pierre.vandevelde@ecoles-wis.net'>pierre.vandevelde@ecoles-wis.net</a>
          </div>
          <div>          
            <h3>Téléphone<AiFillPhone /></h3>
            <a href='tel:+33782744792'>07 82 74 47 92</a></div>
          <div>          
            <h3>Localisation<GiPositionMarker /></h3>
            <a>LILLE (59000)</a></div>
        </div>
        <div>
          <form ref={form} onSubmit={sendEmail} action="">
            <input type="text" name='name' placeholder='Nom Prenom' required />
            <input type="email" name='email' placeholder='Adresse Mail' required />
            <input type="text" name='subject' placeholder='Sujet' required />
            <textarea name="message" rows="7" placeholder='Message' required></textarea>
            <button type='submit' className='btn-contact'>Envoyer <AiOutlineSend /></button>
          </form>
        </div>

        <div className='logos'>

        </div>
      </div>
    </div>
  );
};

export default Contact;