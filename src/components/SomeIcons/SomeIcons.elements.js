import styled from 'styled-components/macro';

export const SomeIconsWrap = styled.ul`
  display: flex;
  max-width: 100%;
  justify-content: flex-start;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    margin-top: 3rem;
    justify-content: center;
  }

  /* display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  max-width: 100%;
  color: var(--color-primary);
  padding-top: 1rem; */
`;

export const SomeItem = styled.a`
  color: var(--color-neutral-lighter);
  font-size: 2rem;
  display: flex;
  padding-right: 2rem;

  @media screen and (max-width: 768px) {
    padding: 0 0.5rem;
  }
  /* font-size: 2rem;
  padding: 10px;
  color: var(--color-neutral-lighter);
  display: flex;
  -webkit-box-align: center;
  align-items: center;s
  justify-content: flex-start;
  position: relative;
  width: 100%; */
`;

export const Background = styled.div`
  border-radius: 50px;
  background-color: var(--color-primary);
  width: 4rem;
  height: 4rem;
  pointer-events: none;
  padding: 1rem;
`;
