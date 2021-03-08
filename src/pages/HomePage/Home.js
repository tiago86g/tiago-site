import React from 'react';
import { HeroSection, ProjectsSection } from '../../components';
import { homeOjbOne, projectsData } from './Data';

export const Home = () => {
  return (
    <div>
      <HeroSection {...homeOjbOne}></HeroSection>
      <ProjectsSection {...projectsData}></ProjectsSection>
    </div>
  );
};

export default Home;
