import React from 'react';
import styled from 'styled-components';

import axios from 'axios';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import { Title, Subtitle, MainContainer } from '../components/elements';
import Form from '../components/Form';

const Section = styled.div``;

const Contact = () => {
  const handleSubmit = async val => {
    await axios
      .post('https://pick-my-laundry.vercel.app/api/contact', {
        name: val.name,
        phone: val.phone,
        message: val.message,
      })
      .then(function(response) {
        console.log('response', response);
        alert('Submit Successfuly');
      })
      .catch(function(error) {
        console.log('error', error);
      });
  };
  return (
    <Layout>
      <Seo title="Contact" description="" />
      <Section>
        <div className="flex justify-center">
          <div className="w-full sm:w-1/2">
            <img className="image" src="/images/contact.png" alt="contact us" />
          </div>
        </div>
        <MainContainer className="text-center">
          <Title>Get In Touch</Title>
          <div className="flex flex-wrap pt-16">
            <div className="w-full sm:w-1/2">
              <Subtitle className="text-yellow-900 font-semibold">
                Please give us your feedback!
              </Subtitle>
              <Subtitle className="pt-4 grey leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim.
              </Subtitle>
              <Form handleFormSubmit={handleSubmit} />
            </div>
            <div className="w-full sm:w-1/2 text-center">
              <Subtitle className="text-yellow-900 font-semibold">
                <i className="fas fa-map-marker-alt text-4xl text-yellow-900" />
                Coffee Shop
              </Subtitle>
              <Subtitle className="pt-4 grey leading-normal">
                321 Awesome Stree
              </Subtitle>
              <Subtitle className="pt-4 grey leading-normal">
                New York, NY 12345
              </Subtitle>
              <div>
                <i className="fas fa-envelope text-4xl text-yellow-900 mt-10" />
              </div>
              <Subtitle className="pt-4 grey leading-normal">
                info@companyname.com{' '}
              </Subtitle>
              <div>
                <i className="fas fa-phone text-4xl text-yellow-900 mt-10" />
              </div>
              <Subtitle className="pt-4 grey leading-normal">
                +1 235 123 1234
              </Subtitle>
            </div>
          </div>
        </MainContainer>
      </Section>
    </Layout>
  );
};
export default Contact;
