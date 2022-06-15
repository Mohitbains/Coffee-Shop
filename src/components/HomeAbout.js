import React from 'react';
import styled from 'styled-components';
import { MainContainer, Subtitle, Title } from './elements';

const Video = styled.div`
  background: url(https://colorlib.com/preview/theme/coffee/img/video-bg.jpg)
    no-repeat center;
  background-size: cover;
`;
const HomeAbout = () => (
  <MainContainer className="block sm:flex ">
    <div className="w-full sm:w-1/2">
      <Video className="pt-40 pb-40 rounded-lg">
        <div className="flex justify-center">
          <a href="https://www.youtube.com/watch?v=ARA0AxrnHdM">
            <img
              src="https://colorlib.com/preview/theme/coffee/img/play-icon.png"
              alt="play-icon"
            />
          </a>
        </div>
      </Video>
    </div>
    <div className="w-full sm:w-1/2 p-8 sm:py-8 sm:pl-32">
      <Subtitle className="text-yellow-900 font-semibold">
        LIVE COFFEE MAKING PROCESS.
      </Subtitle>
      <Title>We Telecast our Coffee Making Live</Title>
      <Subtitle className="pt-4 text-yellow-900">
        We are here to listen from you deliver exellence
      </Subtitle>
      <Subtitle className="pt-4 grey leading-normal">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        temp or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
      </Subtitle>
      <img
        className="img-fluid pt-6"
        src="https://colorlib.com/preview/theme/coffee/img/signature.png"
        alt=""
      />
    </div>
  </MainContainer>
);

export default HomeAbout;
