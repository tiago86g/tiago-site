import styled, { createGlobalStyle } from 'styled-components/macro';

const globalStyle = createGlobalStyle`
*{
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  box-sizing: border-box;
  margin: 0;
  padding:0;
  font-family: 'Fira Sans', sans-serif;

}

html {
  font-size: 100%;

  --color-primary: #00AEEF;
  --color-primary-dark:#008ABE;
  --color-primary-light: #6ACCF1;

  --color-secondary: #FF4501;

  --color-placeholder-text: #242424;

  --color-bg-dark: #101522;
  --color-bg-mid:#DBDBDB;
  --color-bg-light: #ffffff;

  --color-text-light: #ffffff;
  --color-text-mid-dark: #1c2237;
  --color-text-mid-light: #a9b3c1;
  --color-text-dark: #101522;


  --color-neutral-darker: #000000;
  --color-neutral-dark:#101522;
  --color-neutral-midDark: #C4C4C4;
  /* --color-neutral-mid:; */
  --color-neutral-midLight:#DBDBDB;
  /* --color-neutral-light:; */
  --color-neutral-lighter:#ffffff;
}
@media (max-width: 991px) {
  html { font-size: 13px; }
}
@media (max-width: 400px) {
  html { font-size: 11px; }
}

ul, li{
  list-style: none;
}
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
  border-radius: 50px;
  background: ${({ primary }) =>
    primary ? 'var(--color-primary)' : 'var(--color-primary-dark)'};
  white-space: nowrap;
  /* padding: ${({ big }) => (big ? '12px 45px' : '10px 20px')}; */
  padding: ${({ big }) => (big ? '1rem 4rem' : '0.6rem 1rem')};
  color: var(--color-text-light);
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    /* background: var(--color-bg-light); */
    background: ${({ primary }) =>
      primary ? 'var(--color-primary-light)' : 'var(--color-primary)'};
  }

  @media screen and (max-width: 768px) {
    min-width: 15rem;
  }
`;

export default globalStyle;
