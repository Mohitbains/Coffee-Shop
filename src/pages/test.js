import React from 'react';
import axios from 'axios';
import ContactForm from '../components/form/ContactForm';

const ContactPage = () => {
  const handleFormSubmit = async val => {
    // axios.defaults.headers.post['Content-Type'] =
    //   'application/json;charset=utf-8';
    // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    // await axios
    //   .post(`https://pick-my-laundry.vercel.app/api/contact`, {
    //     name: 'hjhfj',
    //     phone: 'hjhj',
    //     message: 'jhjh',
    //   })
    //   .then(response => {
    //     console.log('response', response);

    //     if (typeof window !== 'undefined') {
    //       window.alert('Message sent successfully');
    //     }
    //   })
    //   .catch(error => {
    //     console.log(error);
    //     if (typeof window !== 'undefined') {
    //       window.alert(error);
    //     }
    //   });
    // const data = {
    //   name: 'hjhfj',
    //   phone: 'hjhj',
    //   message: 'jhjh',
    // };
    // await axios({
    //   method: 'post',
    //   url: 'https://pick-my-laundry.vercel.app/api/contact',
    //   data,
    // })
    //   .then(function(response) {
    //     console.log(response.data);
    //     if (typeof window !== 'undefined') {
    //       window.alert('Message sent successfully');
    //     }
    //   })
    //   .catch(error => {
    //     console.log(error);
    //     if (typeof window !== 'undefined') {
    //       window.alert(error);
    //     }
    //   });

    const headers = {
      'Content-Type': 'text/plain',
    };
    const data = {
      name: 'this.state.user_name',
      phone: 'this.state.password',
      message: 'jhhj',
    };

    await axios
      .post('https://pick-my-laundry.vercel.app/api/contact', data, { headers })
      .then(response => {
        console.log('Success ========>', response);
      })
      .catch(error => {
        console.log('Error ========>', error);
      });
  };
  return (
    <div>
      <ContactForm handleFormSubmit={handleFormSubmit} />
    </div>
  );
};

export default ContactPage;
