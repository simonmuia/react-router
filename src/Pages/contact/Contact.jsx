import React from 'react';
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai';
import './contact.css';

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className='header'> <h1>Contact Us</h1></div>
      <address>
        <h3>Simon Muia</h3>
        <p>
          <AiFillPhone />
          (xxx)123-245-6423
        </p>
        <p>
          <AiOutlineMail />
          myemail@email.com
        </p>
      </address>
    </div>
  );
};

export default Contact;
