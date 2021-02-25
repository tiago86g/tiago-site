import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaBehance, FaGithubAlt, FaLinkedin } from 'react-icons/fa';
import { Button } from '../../theme/globalStyles';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  Input,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
  WebsiteRights,
  Email,
} from './Footer.elements';

const Footer = () => {
  const notify = () => {
    toast.success('Email (tiago86g@gmail.com) copied', {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <FooterContainer id="footer">
      <FooterSubscription>
        <FooterSubText>Let's work together!</FooterSubText>
        <Email>
          <Input readOnly value="tiago86g@gmail.com"></Input>
          <CopyToClipboard text="tiago86g@gmail.com">
            <Button onClick={notify} primary>
              copy my e-mail
            </Button>
          </CopyToClipboard>
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </Email>
      </FooterSubscription>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            Tiago<strong>Gonçalves</strong>
          </SocialLogo>
          <WebsiteRights> Tiago Gonçalves © 2021</WebsiteRights>
          <SocialIcons>
            <SocialIconLink
              href="https://github.com/tiago86g"
              target="_blank"
              aria-label="GitHub"
            >
              <FaGithubAlt />
            </SocialIconLink>
            <SocialIconLink
              href="https://www.linkedin.com/in/tiago86g"
              target="_blank"
              aria-label="Linkedin"
            >
              <FaLinkedin />
            </SocialIconLink>
            <SocialIconLink
              href="https://www.behance.net/tiago86g"
              target="_blank"
              aria-label="Behance"
            >
              <FaBehance />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
