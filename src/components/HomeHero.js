import React from 'react';
import styled from 'styled-components';

import { Button, Subtitle, Heading } from './elements';

const Container = styled.div`
  background: url(https://colorlib.com/preview/theme/coffee/img/header-bg.jpg);
  background-size: cover;
`;

const HomeHero = () => (
  <Container className="mx-auto pt-32 pb-64 px-6 sm:px-24 bg-center">
    <div className="w-full lg:w-1/2">
      <Subtitle className="uppercase font-bold pb-4 text-white">
        Now you can feel the Energy.
      </Subtitle>
      <Heading white className="text-3xl sm:text-6xl font-bold pb-4">
        Start your day with a black Coffee
      </Heading>
      <Button>BUY NOW</Button>
    </div>
  </Container>
);

export default HomeHero;
