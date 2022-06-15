import React from 'react';
import axios from 'axios';
import ContactForm from '../components/form/ContactForm';

const ContactPage = () => {
  const handleFormSubmit = async val => {
    await axios
      .post('https://pick-my-laundry.vercel.app/api/contact', {
        name: val.name,
        phone: val.phoneNumber,
        message: val.message,
      })
      .then(function(response) {
        console.log('response', response);
      })
      .catch(function(error) {
        console.log('error', error);
      });
  };
  return (
    <div>
      <ContactForm handleFormSubmit={handleFormSubmit} />
    </div>
  );
};

export default ContactPage;
