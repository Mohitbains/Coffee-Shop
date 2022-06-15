// eslint-disable-next-line import/no-unresolved
import React from 'react';
import styled from 'styled-components';
import CountUp from 'react-countup';

import { MainContainer, Title, Subtitle } from './elements';

const CountupRow = [
  { id: 1, count: '2536', type: 'Happy Client' },
  { id: 2, count: '7562', type: 'Total Projects' },
  { id: 3, count: '2013', type: 'Cups Coffee' },
  { id: 4, count: '10536', type: 'Total Submitted' },
];

const Review = [
  { id: 1, image: 'https://colorlib.com/preview/theme/coffee/img/r1.png' },
  { id: 2, image: 'https://colorlib.com/preview/theme/coffee/img/r2.png' },
];

const Container = styled.div``;

const Countup = () => (
  <Container className="bg-yellow-900">
    <MainContainer>
      <div className="text-center py-6">
        <Title white>What kind of Coffee we serve for you</Title>
        <Subtitle className="white pt-2">
          Who are in extremely love with eco friendly system.
        </Subtitle>
      </div>
      <div className="flex flex-wrap">
        {Review.map(item => (
          <div key={item.id} className="w-full sm:w-1/2 py-10">
            <img src={item.image} alt="" />
            <div className="flex py-6">
              <Subtitle className="white uppercase font-bold">
                lorem ipusm
              </Subtitle>
              <div className="px-4">
                <i className="fas fa-star mr-1 text-orange-400 text-sm" />
                <i className="fas fa-star mr-1 text-orange-400 text-sm" />
                <i className="fas fa-star mr-1 text-orange-400 text-sm" />
                <i className="fas fa-star mr-1 white text-sm" />
                <i className="fas fa-star mr-1 white text-sm" />
              </div>
            </div>
            <Subtitle className="white leading-snug">
              Accessories Here you can find the best computer accessory for your
              laptop, monitor, printer, scanner, speaker. Here you can find the
              best computer accessory for your laptop, monitor, printer,
              scanner, speaker.
            </Subtitle>
          </div>
        ))}
      </div>
      <div className="block sm:flex justify-around mt-10 text-center sm:text-left">
        {CountupRow.map(item => (
          <div key={item.id} className="my-6">
            <CountUp
              start={0}
              end={item.count}
              duration={3}
              delay={2}
              className="text-6xl white font-thin"
            />
            <Subtitle className="text-base my-2 white">{item.type}</Subtitle>
          </div>
        ))}
      </div>
    </MainContainer>
  </Container>
);

export default Countup;
