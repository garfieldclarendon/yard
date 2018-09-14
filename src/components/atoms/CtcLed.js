import React from 'react';
import { css } from 'glamor';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';

const blinkingAnimation = css.keyframes({
  '0%': { backgroundColor: 'transparent' },
  '25%': { backgroundColor: 'rgba(0,0,0,0.2)' },
  '50%': { backgroundColor: 'rgba(0,0,0,0.5)' },
  '75%': { backgroundColor: 'rgba(0,0,0,0.9)' },
  '100%': { backgroundColor: 'transparent' },
});

const StyledDiv = glamorous.div({
  '& .blinking': {
    animation: `${blinkingAnimation} .5s infinite ease-in-out`,
    borderRadius: '15px',
    height: '15px',
    left: '2px',
    position: 'absolute',
    top: '2px',
    width: '15px',
    zIndex: '2',
  },
  height: '15px',
  position: 'relative',
  width: '15px',
},
({ color }) => ({
  '& .colorOverlay': {
    backgroundColor: color,
    border: '2px solid #4d4d4d',
    borderRadius: '15px',
    height: '15px',
    position: 'absolute',
    width: '15px',
    zIndex: '1',
  },
}));

const CtcLed = ({ blinking, color }) => (
  <StyledDiv color={color}>
    {blinking && <div className="blinking" />}
    <div className="colorOverlay" />
  </StyledDiv>
);

CtcLed.propTypes = {
  blinking: PropTypes.bool,
  color: PropTypes.oneOf(['#cc1308', 'yellow', 'white', 'green']),
};

CtcLed.defaultProps = {
  blinking: false,
  color: '#cc1308',
};

export default CtcLed;
