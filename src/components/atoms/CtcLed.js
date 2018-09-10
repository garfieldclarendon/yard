import React from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';

const StyledDiv = glamorous.div({
  border: '2px solid #4d4d4d',
  borderRadius: '15px',
  height: '15px',
  width: '15px',
},
({ color }) => ({
  backgroundColor: color,
}));

const CtcLed = ({ color }) => (
  <StyledDiv color={color}>
    <div className="colorOverlay" />
  </StyledDiv>
);

CtcLed.propTypes = {
  color: PropTypes.oneOf(['#cc1308', 'yellow', 'white', 'green']),
};

CtcLed.defaultProps = {
  color: '#cc1308',
};

export default CtcLed;
