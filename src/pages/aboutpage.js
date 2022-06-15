/* eslint-disable import/no-unresolved */
import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import HomeAbout from '../components/HomeAbout';
import Layout from '../components/Layout';
import { Title, Subtitle, MainContainer } from '../components/elements';

const Section = styled.div``;
const Container = styled.div`
  background: url(https://colorlib.com/preview/theme/coffee/img/menu-bg.jpg);
  background-size: cover;
`;

const Aboutpage = () => (
  <Layout>
    <Seo title="About" description="" />
    <Section>
      <Container>
        <HomeAbout />
      </Container>
      <MainContainer className="block sm:flex ">
        <div className="w-full sm:w-1/2">
          <Title className="text-yellow-900 font-semibold">WHO WE ARE</Title>
          <Subtitle className="pt-4 pb-4 grey leading-normal">
            Lorem ipsum dolor sit amet, quo meis audire placerat eu, te eos
            porro veniam. An everti maiorum detracto mea. Eu eos dicam
            voluptaria, erant bonorum albucius et per, ei sapientem accommodare
            est. Saepe dolorum constituam ei vel. Te sit malorum ceteros
            repudiandae, ne tritani adipisci vis.
          </Subtitle>
          <Title>Why choose us?</Title>
          <Subtitle className="pt-4 grey leading-normal">
            Lorem ipsum dolor sit amet, quo meis audire placerat eu, te eos
            porro veniam. An everti maiorum detracto mea. Eu eos dicam
            voluptaria, erant bonorum albucius et per, ei sapientem accommodare
            est. Saepe dolorum constituam ei vel. Te sit malorum ceteros
            repudiandae, ne tritani adipisci vis.
          </Subtitle>
        </div>
        <div className="w-full sm:w-1/2">
          <img
            className="img-fluid pt-6"
            src="https://webthemez.com/demo/coffee-shop-free-html5-template/assets/img/about/about1.jpg"
            alt=""
          />
        </div>
      </MainContainer>
    </Section>
  </Layout>
);

export default Aboutpage;
