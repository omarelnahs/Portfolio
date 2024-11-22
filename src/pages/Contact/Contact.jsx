import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './contact.css'
const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xkcan1i', 'template_xxheb6t', form.current, '5NXRMEuwPyKx9yXfx')
      .then((result) => {
          alert("done.")
      }, (error) => {
          alert("error in form")
      });
  };


  return (
    <section className="contact container section" id='contact'>
      <h2 className="section__title">Let's Connect</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything!</h3>
          <p className="contact__desc">I'm always excited to take on new challenges and collaborate with like-minded individuals. If you have a project in mind or just want to chat about tech, feel free to reach out! </p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input type="text" name='name' className="contact__form-input" placeholder='Insert Your Name' />
            </div>

            <div className="contact__form-div">
              <input type="email" name='email' className="contact__form-input" placeholder='Insert Your Email' />
            </div>
            
            <div className="contact__form-div">
              <input type="text" className="contact__form-input" name='subject' placeholder='Insert Your subject' />
            </div>

            <div className="contact__form-div contact__form-area">
              <textarea 
                name="message" 
                id="" 
                cols="30" 
                rows="10" 
                className='contact__form-input' 
                placeholder='Write Your Message'
              ></textarea>
            </div>

            <input className='btn' type='submit' value="Send Message"/>

          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact