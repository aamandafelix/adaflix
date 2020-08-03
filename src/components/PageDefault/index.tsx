import React from 'react';
import styled, { css } from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

interface PageDefaultProps {
  children: any;
  paddingAll?: number;
}

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
  ${({ paddingAll }: {paddingAll: any}) => css`
    padding: ${paddingAll};
  `}
`;

function PageDefault({ children, paddingAll }: PageDefaultProps) {
  return (
    <>
      <Menu />
        <Main paddingAll={paddingAll}>
          {children}
        </Main>
      <Footer />
    </>
  );
}

export default PageDefault;
