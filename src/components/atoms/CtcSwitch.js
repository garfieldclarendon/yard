import React from 'react';
import glamorous from 'glamorous';

const StyledDiv = glamorous.div({
  '& .handle': {
    '&::after': {
      backgroundColor: '#CCC',
      borderRadius: '20px',
      bottom: '-5px',
      content: ' ',
      display: 'block',
      height: '20px',
      left: '-7px',
      position: 'absolute',
      width: '20px',
    },
    backgroundColor: '#CCC',
    borderRadius: '3px',
    height: '35px',
    width: '6px',
  },
});

const CtcSwitch = () => (
  <StyledDiv>
    <div className="handle" />
  </StyledDiv>
);

export default CtcSwitch;
