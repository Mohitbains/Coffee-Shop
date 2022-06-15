import React from 'react';
import styled from 'styled-components';

import { Subtitle, MainContainer } from './elements';
import Social from './Social';

const Container = styled.div`
  background: url(https://colorlib.com/preview/theme/coffee/img/footer-bg.jpg);
  background-size: cover;
  background-position: center;
`;

const Footer = () => (
  <Container className="py-16">
    <MainContainer className="block sm:flex white py-40">
      <div className="w-full sm:w-2/5 pr-12 pt-8">
        <Subtitle className="text-xl font-semibold font-hairline">
          About Us
        </Subtitle>
        <Subtitle className="font-hairline leading-tight pt-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore dolore.
        </Subtitle>
        <Subtitle className="font-hairline leading-tight pt-8">
          Copyright ©2019 All rights reserved | This template is made with by
          Colorlib
        </Subtitle>
      </div>
      <div className="w-full sm:w-2/5 pr-12 pt-8">
        <Subtitle className="text-xl font-semibold white">Newsletter</Subtitle>
        <Subtitle className="font-hairline leading-tight pt-8">
          Stay update with our latest
        </Subtitle>
        <form className="w-full max-w-sm mt-4">
          <div className="flex">
            <input
              className="w-full p-3 text-black"
              type="text"
              placeholder="Enter Email"
              aria-label="Full name"
            />
            <button className="flex-shrink-0 bg-yellow-900 p-3" type="button">
              <i className="fas fa-long-arrow-alt-right" />
            </button>
          </div>
        </form>
      </div>
      <div className="w-full sm:w-1/5 pr-12 pt-8">
        <Subtitle className="text-xl font-semibold white">Follow Us</Subtitle>
        <Subtitle className="font-hairline leading-tight pt-8">
          Let us be social
        </Subtitle>
        <div className="pt-6 flex">
          <Social />
        </div>
      </div>
    </MainContainer>
  </Container>
);

export default Footer;
