import React from 'react';
import glamorous from 'glamorous';
import { fontConfig, spacing, zIndex } from 'config/styles';

const StyledHeader = glamorous.header({
  '& h1': {
    margin: 0,
    ...fontConfig.h1,
  },
  backgroundColor: '#8b96a0',
  boxShadow: '1px 1px 1px rgba(0, 0, 0, 0.3)',
  color: '#FFFFFF',
  fontWeight: 'bold',
  padding: spacing.boxPadding,
  position: 'relative',
  zIndex: zIndex.header,
});

const Header = () => (
  <StyledHeader>
    <h1>Garfield-Clarendon</h1>
  </StyledHeader>
);

export default Header;
