import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const ProjectSec = styled.div`
  color: var(--color-text-light);
  padding: 160px 0;
  background: ${({ lightBg }) =>
    lightBg ? 'var(--color-bg-light)' : 'var(--color-bg-dark)'};
  @media screen and (max-width: 768px) {
    padding: 20px 0;
  }
`;

export const ProjectsHeading = styled.h2`
  font-size: 2.5rem;
  display: flex;
  color: ${({ lightText }) =>
    lightText ? 'var(--color-text-light)' : 'var(--color-text-dark)'};
`;

export const ProjectsList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin-top: 3rem;
`;

export const ProjectsListCard = styled.li`
  border-radius: 5px;
  border: 1px solid red;
  display: flex;
  width: 18rem;
  height: 25rem;
  background: var(--color-bg-light);
`;

export const ProjectsCardItem = styled(Link)`
  color: var(--color-text-dark);
  overflow: hidden;
`;

export const Img = styled.img`
  width: auto;
  height: 80%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
