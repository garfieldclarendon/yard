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

const showRunItems = () => (
  <React.Fragment>
    <li>
      <a href="#">CA</a>
    </li>
  </React.Fragment>
);

const showConfigureItems = () => (
  <React.Fragment>
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
  </React.Fragment>
);

const isConfigurePath = location.pathname.includes('configure'); // eslint-disable-line no-restricted-globals

const SubNavigation = () => (
  <StyledUL>
    {isConfigurePath ? showConfigureItems() : showRunItems()}
  </StyledUL>
);

export default SubNavigation;
