import React from 'react';
import glamorous from 'glamorous';
import { Link } from 'react-router-dom';

const StyledUL = glamorous.ul({
  '& li': {
    display: 'inline',
    listStyleType: 'none',
    margin: '0 15px',
    padding: '15px 0px',
  },
  margin: 0,
  marginTop: '15px',
  padding: 0,
});

const MainNavigation = () => (
  <StyledUL>
    <li>
      <Link to="/collections">Collections</Link>
    </li>
    <li>
      <Link to="/routes">Routes</Link>
    </li>
    <li>
      <Link to="/signals">Signals</Link>
    </li>
    <li>
      <Link to="/turnouts">Turnouts</Link>
    </li>
    <li>
      <Link to="/help">Help</Link>
    </li>
  </StyledUL>
);

export default MainNavigation;
