import styled from 'styled-components/macro';

export const InfoSec = styled.div`
  color: var(--color-text-light);
  padding: 160px 0;
  background: ${({ lightBg }) =>
    lightBg ? 'var(--color-bg-light)' : 'var(--color-bg-dark)'};

  @media screen and (max-width: 768px) {
    padding: 20px 0;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: top;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row' : 'row-reverse')};
`;

export const InfoColumn = styled.div`
  margin-bottom: 45px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const Subtitle = styled.div`
  color: ${({ lightSubtitle }) =>
    lightSubtitle ? 'var(--color-bg-mid)' : 'var(--color-primary)'};
  font-size: 1rem;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 0.5rem;
`;

export const Heading = styled.h1`
  margin-bottom: 2rem;
  font-size: 3.8rem;
  line-height: 1.1;
  font-weight: 100;
  color: ${({ lightText }) =>
    lightText ? 'var(--color-text-light)' : 'var(--color-text-dark)'};
`;

export const Description = styled.p`
  max-width: 65ch;
  margin-bottom: 2rem;
  font-size: 1.2rem;
  line-height: 2rem;
  color: ${({ lightTextDesc }) =>
    lightTextDesc
      ? 'var(--color-text-mid-light)'
      : 'var(--color-text-mid-dark)'};
  margin-block-end: 0.5em;
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;

export const Img = styled.img`
  padding-right: 0;
  border: ${({ border }) => (border ? '4px solid var(--color-primary)' : '0')};
  vertical-align: middle;
  display: inline-block;
  max-height: 22rem;
  border-radius: ${({ rounded }) => (rounded ? '50%' : '0%')};

  &:hover {
    transition: all 0.3s ease-in-out;
    -webkit-transform: scale(1.02);
    -ms-transform: scale(1.02);
    transform: scale(1.02);
    background-color: var(--color-primary);
  }
`;
