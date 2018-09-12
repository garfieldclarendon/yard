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
  transformOrigin: 'bottom center',
  transition: '1s',
},
({ rotation }) => ({
  transform: `rotate(${rotation})`,
}));

const SwitchGroupDiv = glamorous.div({
  '& .backgroundWrapper': {
    left: 0,
    position: 'absolute',
    top: '20px',
  },
  '& .hitArea': {
    display: 'inline-block',
    height: '130px',
    width: '28px',
  },
  '& .hitAreas': {
    left: 0,
    position: 'absolute',
    top: '-20px',
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
  margin: '10px',
  position: 'relative',
  width: '92px',
});

class CtcSwitchGroup extends React.Component {
  static propTypes = {
    hideLeft: PropTypes.bool,
    hideRight: PropTypes.bool,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['Signal', 'Switch', 'Lock']),
  };

  static defaultProps = {
    hideLeft: false,
    hideRight: false,
    type: 'Switch',
  };

  constructor() {
    super();
    this.state = { position: '0' };
  }

  changeSelection = (e) => {
    if (e.target.className.includes('leftHitArea')) {
      this.setState({ position: '-35deg' });
    } else if (e.target.className.includes('rightHitArea')) {
      this.setState({ position: '35deg' });
    } else {
      this.setState({ position: '0' });
    }
  }

  render() {
    const {
      hideLeft,
      hideRight,
      name,
      type,
    } = this.props;
    const {
      position,
    } = this.state;
    return (
      <SwitchGroupDiv>
        {!hideLeft && (
        <div className="ledLeft">
          <CtcLed />
        </div>
        )}
        {type === 'Signal' && (
        <div className="ledCenter">
          <CtcLed />
        </div>
        )}
        {!hideRight && (
        <div className="ledRight">
          <CtcLed />
        </div>
        )}
        <div className="backgroundWrapper">
          <div className="hitAreas">
            <div className="hitArea leftHitArea" onClick={this.changeSelection} />
            <div className="hitArea centerHitArea" onClick={this.changeSelection} />
            <div className="hitArea rightHitArea" onClick={this.changeSelection} />
          </div>
          <SwitchWrapper rotation={position}>
            <CtcSwitch />
          </SwitchWrapper>
          <CtcSwitchBackground name={name} type={type} />
        </div>
      </SwitchGroupDiv>
    );
  }
}

export default CtcSwitchGroup;
