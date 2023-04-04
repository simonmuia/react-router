import React from 'react';
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai';
import './contact.css';
import SectionHeader from '../../components/SectionHeader';

const Contact = () => {
  return (
    <div className='contact-container'>
      <SectionHeader headerTitle='Contact Us'/>
      <div className='address-container'> 
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
    </div>
  );
};

export default Contact;
