import React from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const StyledDiv = glamorous.div({
  '& a': {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '2px',
    boxShadow: '1px 1px 0px rgba(0, 0, 0, 0.3)',
    color: '#236525',
    display: 'inline-block',
    fontSize: '20px',
    padding: '10px',
    textDecoration: 'none',
  },
  '& a.solid': {
    backgroundColor: 'rgb(7, 131, 38)',
    color: '#ffffff',
  },
});

const ActionAnchor = ({ href, isSolid, text }) => (
  <StyledDiv>
    <Link className={isSolid ? 'solid' : ''} to={href}>{text}</Link>
  </StyledDiv>
);

ActionAnchor.propTypes = {
  href: PropTypes.string.isRequired,
  isSolid: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

ActionAnchor.defaultProps = {
  isSolid: false,
};

export default ActionAnchor;
