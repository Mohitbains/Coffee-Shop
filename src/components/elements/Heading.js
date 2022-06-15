/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';

const Container = styled.h1`
  color: ${props =>
    props.white ? props.theme.colorWhite : props.theme.darkBlack};
`;

const Heading = ({ children, ...props }) => (
  <Container className="text-4xl leading-loose font-semibold" {...props}>
    {children}
  </Container>
);

export default Heading;
