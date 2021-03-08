import React from 'react';
import { Container } from '../../theme/globalStyles';
import {
  ProjectSec,
  ProjectsHeading,
  ProjectsList,
  ProjectsListCard,
  Img,
  ProjectsCardItem,
} from './ProjectsSection.elements';

const ProjectsSection = ({ headLine, projects, img, alt }) => {
  return (
    <div>
      <ProjectSec>
        <Container>
          <ProjectsHeading lightText>{headLine}</ProjectsHeading>
          <ProjectsList>
            {projects.map((project) => {
              return (
                <ProjectsListCard>
                  <ProjectsCardItem to={`/${project.title}`}>
                    <Img src={project.img} alt={project.alt}></Img>
                    <h3>{project.title}</h3>
                    <ul>
                      {project.tools.map((tool) => {
                        return <li>{tool}</li>;
                      })}
                    </ul>
                  </ProjectsCardItem>
                </ProjectsListCard>
              );
            })}
          </ProjectsList>
        </Container>
      </ProjectSec>
    </div>
  );
};

export default ProjectsSection;
