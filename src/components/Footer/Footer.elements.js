import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
  background-color: var(--color-text-dark);
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterSubscription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: var(--color-text-light);
`;

export const FooterSubHeading = styled.p`
  font-family: sans-serif;
  margin-bottom: 24px;
  font-size: 24px;
`;

export const FooterSubText = styled.p`
  margin-bottom: 24px;
  font-size: 20px;
`;

export const Email = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 20rem;
  }
`;

export const Input = styled.input`
  padding: 10px 20px;
  margin-right: 10px;
  border-radius: 50px;
  outline: none;
  border: none;
  border: 1px solid var(--color-bg-light);
  text-align: center;

  @media screen and (max-width: 768px) {
    margin: 0 0 16px 0;
    width: 100%;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;
export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: var(--color-text-light);
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const WebsiteRights = styled.small`
  color: var(--color-text-light);
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  padding-right: 16px;
`;

export const SocialIconLink = styled.a`
  color: var(--color-text-light);
  font-size: 24px;
  padding: 10px;
`;
