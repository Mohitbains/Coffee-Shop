/* eslint-disable react/jsx-props-no-spreading */
// eslint-disable-next-line import/no-unresolved
import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
  color: ${props => props.theme.lighterBlack};
`;

const Button = ({ children, ...props }) => {
  return (
    <Container
      type="submit"
      className="mt-4 bg-white hover:text-white font-semibold border border-solid border-white hover:bg-transparent rounded-full px-10 py-3"
      {...props}>
      {children}
    </Container>
  );
};

export default Button;
