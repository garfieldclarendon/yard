import React from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';

const StyledButton = glamorous.button({
  '&:hover': {
    background: 'radial-gradient(circle, rgba(237,237,237,0.8) 0%, rgba(163,163,163,0.8) 100%)',
    cursor: 'pointer',
  },
  background: 'radial-gradient(circle, rgba(237,237,237,1) 0%, rgba(163,163,163,1) 100%)',
  border: '1px solid rgba(101,101,101,1)',
  borderRadius: '30px',
  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.35)',
  height: '30px',
  width: '30px',
},
({ color }) => ({
  backgroundColor: color,
}));

const CtcExecute = ({ onHandleClick }) => (
  <StyledButton onClick={() => { onHandleClick(); }} />
);

CtcExecute.propTypes = {
  onHandleClick: PropTypes.func,
};

CtcExecute.defaultProps = {
  onHandleClick: () => {},
};

export default CtcExecute;
