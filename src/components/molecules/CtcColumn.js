import React from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import CtcLed from '../atoms/CtcLed';
import CtcExecute from '../atoms/CtcExecute';

const StyledDiv = glamorous.div({
  '& .communicationLed div': {
    margin: '0 auto',
  },
  '& .switchGroup': {
    margin: '15px 0',
  },
  '& li': {
    listStyle: 'none',
    margin: '30px 0',
    padding: 0,
  },
  '& ul': {
    margin: 0,
    padding: 0,
  },
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'center',
  padding: '20px 10px',
  width: '100px',
});

const mapColor = (communication) => {
  let color = 'white';
  if (communication === 'working') {
    color = '#CCCCCC';
  } else if (communication === 'error') {
    color = 'red';
  }
  return color;
};

const CtcColumn = ({ children, communication, handleExecute }) => (
  <StyledDiv>
    { children }
    <ul>
      <li className="communicationLed">
        { children && <CtcLed blinking={communication !== 'idle'} color={mapColor(communication)} />}
      </li>
      <li>
        <CtcExecute onHandleClick={handleExecute} />
      </li>
    </ul>
  </StyledDiv>
);

CtcColumn.propTypes = {
  children: PropTypes.node,
  communication: PropTypes.oneOf(['working', 'error', 'idle']),
  handleExecute: PropTypes.func,
};

CtcColumn.defaultProps = {
  children: null,
  communication: 'idle',
  handleExecute: () => {},
};

export default CtcColumn;
