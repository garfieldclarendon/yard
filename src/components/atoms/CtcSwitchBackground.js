import React from 'react';
import PropTypes from 'prop-types';

const transformType = (type) => {
  let value = '';
  if (type === 'Switch') {
    value = 'SWITCH';
  } else if (type === 'Signal') {
    value = 'SIGNAL';
  } else if (type === 'Lock') {
    value = 'Lock';
  }
  return value;
};

const CtcSwitchBackground = ({ name, type }) => (
  <svg
    height="104px"
    viewBox="0 0 92 104"
    version="1.1"
    width="92px"
  >
    <g
      fill="none"
      fillRule="evenodd"
      stroke="none"
      strokeWidth="1"
    >
      <g
        id="switch"
        transform="translate(0.000000, 1.867188)"
      >
        <path d="M45.7086491,0.000132781239 C45.7779384,4.41091509e-05 45.8474874,0 45.9172981,0 C54.2387223,0.0221888793 58.790541,0.703052263 63.4121094,2.84716797 C68.1103516,5.02685547 67.1132812,9.77392578 70.6875,13.4370117 C74.2617187,17.1000977 85.2890625,22.3569336 85.2890625,22.3569336 C91.2978516,25.6176758 91.1367188,28.7426758 89.2773438,33.6645508 L63.4121094,84.2133789 C55.8503275,100.68028 53.0736551,100.990621 45.9172981,100.99647 C45.8473358,100.996582 45.7777888,100.996582 45.708649,100.996568 C45.6395093,100.996582 45.5699623,100.996582 45.5,100.996582 C38.3436431,100.990621 35.5669707,100.68028 28.0051888,84.2133789 L2.13995438,33.6645508 C0.280579382,28.7426758 0.119446569,25.6176758 6.12823563,22.3569336 C6.12823563,22.3569336 17.1555794,17.1000977 20.7297981,13.4370117 C24.3040169,9.77392578 23.3069466,5.02685547 28.0051888,2.84716797 C32.6267572,0.703052263 37.1785758,0.0221888793 45.5,0.000536985459 C45.5698108,0 45.6393597,4.41091509e-05 45.7086491,0.000132781239 Z" id="Combined-Shape" stroke="#CCCAB1" strokeWidth="2" fill="#11120C" />
        <text
          fill="#CCCAB1"
          fontFamily="Futura-Medium, Futura"
          fontSize="9"
          fontWeight="400"
          id="SWITCH"
        >
          <tspan x="40" y="18">{name}</tspan>
        </text>
        <text
          fill="#CCCAB1"
          fontFamily="Futura-Medium, Futura"
          fontSize="9"
          fontWeight="400"
          id="SWITCH"
        >
          <tspan x="23.1845703" y="38.7885692">{transformType(type)}</tspan>
        </text>
        <text
          fontFamily="Futura-Medium, Futura"
          fontSize="16"
          fontWeight="400"
          fill="#CCCAB1"
          id="N"
          transform="translate(12.229492, 34.346680) rotate(-30.000000) translate(-12.229492, -34.346680) "
        >
          <tspan x="5.47558594" y="40.8466797">N</tspan>
        </text>
        <text
          fontFamily="Futura-Medium, Futura"
          fontSize="16"
          fontWeight="400"
          fill="#CCCAB1"
          id="R"
          transform="translate(80.628522, 33.253413) rotate(-330.000000) translate(-80.628522, -33.253413) "
        >
          <tspan x="75.8121158" y="39.7534129">R</tspan>
        </text>
      </g>
    </g>
  </svg>
);

CtcSwitchBackground.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['Signal', 'Switch', 'Lock']),
};

CtcSwitchBackground.defaultProps = {
  type: 'Switch',
};

export default CtcSwitchBackground;
