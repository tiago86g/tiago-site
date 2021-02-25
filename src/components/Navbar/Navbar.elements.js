import styled from 'styled-components/macro';
import { Container } from '../../theme/globalStyles';

import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  background: var(--color-bg-light);
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 9999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 4rem;

  ${Container};
`;

export const NavLogo = styled(Link)`
  color: var(--color-text-dark);
  justify-content: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
`;

export const NavMobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 2rem;
    color: var(--color-text-dark)
    cursor: pointer;
  }
`;

export const NavLogoName = styled.p`
  padding-left: 0px;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 4rem;
    left: ${({ click }) => (click ? 0 : '-100%')};
    padding-top: 2rem;
    opacity: 1;
    transition: all 0.5s ease;
    background: var(--color-text-light);
  }
`;

export const NavItem = styled.li`
  height: 4rem;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid var(--color-primary);
  }

  @media screen and (max-width: 768px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled(Link)`
  color: var(--color-text-dark);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  font-size: 1rem;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    font-size: 1.5rem;

    &:hover {
      color: var(--color-primary);
      transition: all 0.3s ease;
    }
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;
