import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HomeHero from '../components/HomeHero';
import HomeAbout from '../components/HomeAbout';
import Products from '../components/Products';
import Gallery from '../components/Gallery';
import Countup from '../components/Countup';

const Container = styled.div``;

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to CafeCoffee" />
        <Container>
          <HomeHero />
          <HomeAbout />
          <Products />
          <Gallery />
          <Countup />
        </Container>
      </Layout>
    );
  }
}
