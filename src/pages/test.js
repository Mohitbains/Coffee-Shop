import React from 'react';
import axios from 'axios';
import ContactForm from '../components/form/ContactForm';

const ContactPage = () => {
  const handleFormSubmit = async val => {
    await axios
      .post(`https://pick-my-laundry.vercel.app/api/contact`, {
        name: val.name,
        phone: val.phoneNumber,
        message: val.message,
      })
      .then(response => {
        console.log('response', response);

        if (typeof window !== 'undefined') {
          window.alert('Message sent successfully');
        }
      })
      .catch(error => {
        console.log(error);
        if (typeof window !== 'undefined') {
          window.alert(error);
        }
      });
  };
  return (
    <div>
      <ContactForm handleFormSubmit={handleFormSubmit} />
    </div>
  );
};

export default ContactPage;
