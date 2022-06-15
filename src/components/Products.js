import React from 'react';
import styled from 'styled-components';
import { MainContainer, Title, Subtitle } from './elements';

const Container = styled.div`
  background: url(https://colorlib.com/preview/theme/coffee/img/menu-bg.jpg);
  background-size: cover;
`;
const ProductItems = [
  { id: 1, name: 'Cappuccino', price: '$49' },
  { id: 2, name: 'Americano', price: '$47' },
  { id: 3, name: 'Espresso', price: '$45' },
  { id: 4, name: 'Macchiato', price: '$51' },
  { id: 5, name: 'Mocha', price: '$53' },
  { id: 6, name: 'Coffee Latte', price: '$44' },
  { id: 7, name: 'Piccolo Latte', price: '$47' },
  { id: 8, name: 'Ristretto', price: '$56' },
  { id: 9, name: 'Affogato', price: '$61' },
];

const Products = () => (
  <Container>
    <MainContainer>
      <div className="text-center">
        <Title>What kind of Coffee we serve for you</Title>
        <Subtitle className="grey pt-2 pb-8">
          Who are in extremely love with eco friendly system.
        </Subtitle>
      </div>
      <div className="p-4 flex flex-wrap justify-around">
        {ProductItems.map(item => (
          <div
            key={item.id}
            className="my-4 mx-2 max-w-sm card rounded-lg overflow-hidden shadow-lg">
            <div className="p-8">
              <div className="flex justify-between pb-6">
                <Subtitle className="text-xl font-semibold">
                  {item.name}
                </Subtitle>
                <Subtitle className="text-xl font-semibold text-yellow-900">
                  {item.price}
                </Subtitle>
              </div>
              <Subtitle className="grey text-base">
                Usage of the Internet is becoming more <br />
                common due to rapid advance.
              </Subtitle>
            </div>
          </div>
        ))}
      </div>
    </MainContainer>
  </Container>
);

export default Products;
