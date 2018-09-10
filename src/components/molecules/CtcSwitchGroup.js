import React from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import CtcSwitchBackground from '../atoms/CtcSwitchBackground';
import CtcLed from '../atoms/CtcLed';
import CtcSwitch from '../atoms/CtcSwitch';

const SwitchWrapper = glamorous.div({
  left: '42px',
  position: 'absolute',
  top: '70px',
});

const StyledDiv = glamorous.div({
  '& .backgroundWrapper': {
    left: 0,
    position: 'absolute',
    top: '20px',
  },
  '& .ledCenter': {
    left: '36px',
    position: 'absolute',
    top: 0,
  },
  '& .ledLeft': {
    left: 0,
    position: 'absolute',
    top: '15px',
  },
  '& .ledRight': {
    position: 'absolute',
    right: 0,
    top: '15px',
  },
  height: '120px',
  position: 'relative',
  width: '92px',
});

const CtcSwitchGroup = ({ type }) => (
  <StyledDiv>
    <div className="ledLeft">
      <CtcLed />
    </div>
    {type === 'Switch' && (
    <div className="ledCenter">
      <CtcLed />
    </div>
    )}
    <div className="ledRight">
      <CtcLed />
    </div>
    <div className="backgroundWrapper">
      <SwitchWrapper>
        <CtcSwitch />
      </SwitchWrapper>
      <CtcSwitchBackground />
    </div>
  </StyledDiv>
);

CtcSwitchGroup.propTypes = {
  type: PropTypes.oneOf(['Switch', 'Lock']),
};

CtcSwitchGroup.defaultProps = {
  type: 'Switch',
};

export default CtcSwitchGroup;
