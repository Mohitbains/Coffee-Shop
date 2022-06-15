/* eslint-disable import/no-unresolved */
import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import { Title, Subtitle, MainContainer } from '../components/elements';

const Section = styled.div`
  background: url(https://colorlib.com/preview/theme/coffee/img/menu-bg.jpg);
  background-size: cover;
`;
const Blog = [
  { id: 1, image: 'https://colorlib.com/preview/theme/coffee/img/b1.jpg' },
  { id: 2, image: 'https://colorlib.com/preview/theme/coffee/img/b2.jpg' },
];

const News = () => (
  <Layout>
    <Seo title="Blog" description="" />
    <Section>
      <MainContainer>
        <div className="text-center py-6">
          <Title>What kind of Coffee we serve for you</Title>
          <Subtitle className="grey pt-2">
            Who are in extremely love with eco friendly system.
          </Subtitle>
        </div>
        <div className="flex flex-wrap py-6">
          {Blog.map(item => (
            <div key={item.id} className="px-8 w-full sm:w-1/2">
              <img className="py-8" src={item.image} alt="" />
              <Subtitle className="font-semibold">
                Portable latest Fashion for young women
              </Subtitle>
              <Subtitle className="pt-4 grey leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </Subtitle>
              <Subtitle className="pt-4 text-yellow-900">
                31st January, 2018
              </Subtitle>
            </div>
          ))}
        </div>
      </MainContainer>
    </Section>
  </Layout>
);

export default News;
