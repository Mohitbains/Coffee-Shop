/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';

const Container = styled.h2`
  color: ${props =>
    props.white ? props.theme.colorWhite : props.theme.darkBlack};
`;

const Title = ({ children, ...props }) => (
  <Container className="text-4xl leading-normal font-semibold" {...props}>
    {children}
  </Container>
);

export default Title;
