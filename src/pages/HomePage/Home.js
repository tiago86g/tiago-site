import React from 'react';
import { HeroSection } from '../../components';
import { homeOjbOne } from './Data';

export const Home = () => {
  return (
    <div>
      <HeroSection {...homeOjbOne}></HeroSection>
    </div>
  );
};

export default Home;
