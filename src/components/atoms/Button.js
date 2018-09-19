import React from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';

const StyledButton = glamorous.button({
  '&.usage-normal': {
    backgroundColor: 'rgba(204, 19, 8, 0.83)',
    color: '#f3f3f3',
  },
  border: 'none',
  borderRadius: '2px',
  boxShadow: '1px 1px 0px #790b05',
  color: '#236525',
  display: 'inline-block',
  fontSize: '17px',
  padding: '15px 25px',
  textDecoration: 'none',
  textShadow: '1px 1px 0 #980e06',
});

const Button = ({ text, usage }) => (
  <StyledButton className={`usage-${usage}`}>{text}</StyledButton>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  usage: PropTypes.oneOf(['warning', 'info', 'normal', 'danger']),
};

Button.defaultProps = {
  usage: 'normal',
};

export default Button;
