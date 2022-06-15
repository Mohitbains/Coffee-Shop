/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';

const Container = styled.p``;

const Subtitle = ({ children, ...props }) => (
  <Container className="text-sm leading-tight font-semibold" {...props}>
    {children}
  </Container>
);

export default Subtitle;
