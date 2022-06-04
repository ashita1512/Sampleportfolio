import React from 'react'
import './contact.css'
import {FiMail} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'
import {FaWhatsapp} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_401d2qd', 'template_6ng3agk', form.current, 'user_HIdHkUZT0nuSo1ZET')
    e.target.reset()
  };
  return (

    <section id='contact'>
       <h5>Get In Touch</h5>
       <h2>Contact Me</h2>

       <div className='container contact_container'>
          <div className='contact_options'>
             <article className='contact_option'>
               <FiMail className='contact_option-icon'/>
               <h4>Email</h4>
               <h5>chhavi_s@me.iitr.ac.in</h5>
               <a href='mailto:chhavi_s@me.iitr.ac.in' target='_blank'>Send an Email</a>
             </article>
             <article className='contact_option'>
               <BsLinkedin className='contact_option-icon'/>
               <h4>linkedln</h4>
               <h5>Chhavi Sood</h5>
               <a href='https://www.linkedin.com/in/chhavi-sood-017177205/' target='_blank'>Connect</a>
               
             </article>
             <article className='contact_option'>
               <FaWhatsapp className='contact_option-icon'/>
               <h4>WhatsApp</h4>
               <h5>+91 70871 68802</h5>
               <a href='https://wa.me/917087168802?text=Hello! Chhavi' target='_blank'>Send a message</a>
             </article>
          </div> 
          <form ref={form} onSubmit = {sendEmail}>
             <input type='text' name='name' placeholder='Your Full Name' required />
             <input type='email' name='email' placeholder='Your Email' required />
             <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
             <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
       </div>
    </section>
  )
}

export default Contact