import React from 'react';
import { NavLink } from 'react-router-dom';
import { spacing } from 'config/styles';
import glamorous from 'glamorous';

const StyledUL = glamorous.ul({
  '& a': {
    fontSize: '1em',
  },
  '& a.active': {
    color: 'black',
    textDecoration: 'none',
  },
  '& a:hover': {
    textDecoration: 'none',
  },
  '& li': {
    display: 'inline',
    listStyleType: 'none',
    margin: '10px',
  },
  backgroundColor: '#F7F7F7',
  boxShadow: '1px 1px #EBEBEB',
  display: '#646464',
  margin: 0,
  padding: spacing.boxPadding,
});

const SubNavigation = () => (
  <StyledUL>
    <li>
      <NavLink activeClassName="active" to="/configure/collections">Collections</NavLink>
    </li>
    <li>
      <NavLink activeClassName="active" to="/configure/routes">Routes</NavLink>
    </li>
    <li>
      <NavLink activeClassName="active" to="/configure/signals">Signals</NavLink>
    </li>
    <li>
      <NavLink activeClassName="active" to="/configure/turnouts">Turnouts</NavLink>
    </li>
    <li>
      <NavLink activeClassName="active" to="/help">Help</NavLink>
    </li>
  </StyledUL>
);

export default SubNavigation;
