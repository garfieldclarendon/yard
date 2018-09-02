import React from 'react';
import glamorous from 'glamorous';
import { fontConfig, spacing, zIndex } from 'config/styles';
import MainNavigation from './MainNavigation';

const StyledHeader = glamorous.header({
  '& h1': {
    display: 'inline',
    margin: 0,
    ...fontConfig.h1,
  },
  backgroundColor: '#8b96a0',
  boxShadow: '1px 1px 1px rgba(0, 0, 0, 0.3)',
  color: '#FFFFFF',
  fontWeight: 'light',
  padding: spacing.boxPadding,
  position: 'relative',
  zIndex: zIndex.header,
});

const Header = () => (
  <StyledHeader>
    <h1>
      <a href="/">Garfield-Clarendon</a>
    </h1>
    <MainNavigation />
  </StyledHeader>
);

export default Header;
