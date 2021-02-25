import React, { useState, useEffect } from 'react';
import { VscChromeClose, VscListSelection } from 'react-icons/vsc';
import { IconContext } from 'react-icons/lib';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMobileIcon,
  NavLogoName,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
} from './Navbar.elements';
import { Button } from '../../theme/globalStyles';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 768) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: 'var(--color-text-dark)' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              <NavLogoName>
                Tiago<strong>Gonçalves</strong>
              </NavLogoName>
            </NavLogo>
            <NavMobileIcon onClick={handleClick}>
              {click ? <VscChromeClose /> : <VscListSelection />}
            </NavMobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/">Projects</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/">About me</NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink href="mailto:name@email.com" to="/">
                    <Button primary mailto="name@email.com">
                      Contact
                    </Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink component="a" href="mailto:name@email.com" to="/">
                    <Button fontBig primary>
                      Contact
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
