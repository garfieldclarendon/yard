import React from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import { zIndex } from 'config/styles';

const StyledDiv = glamorous.div({
  '& .colorOverlay': {
    backgroundColor: 'rgba(0, 0, 0, .3)',
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  background: 'url("./images/DSC01612.JPG")',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '600px',
  position: 'relative',
  width: '100%',
  zIndex: zIndex.heroImage,
});

const HeroImage = ({ children }) => (
  <StyledDiv>
    <div className="colorOverlay" />
    { children }
  </StyledDiv>
);

HeroImage.propTypes = {
  children: PropTypes.node,
};

HeroImage.defaultProps = {
  children: undefined,
};

export default HeroImage;
