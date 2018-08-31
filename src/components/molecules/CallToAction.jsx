import React from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import ActionAnchor from '../atoms/ActionAnchor';
import HeroImage from '../atoms/HeroImage';

const StyledDiv = glamorous.div({
  left: 0,
  marginLeft: 'auto',
  marginRight: 'auto',
  position: 'absolute',
  right: 0,
  textAlign: 'center',
  top: 200,
});

const CallToAction = ({ href, text }) => (
  <HeroImage>
    <StyledDiv>
      <ActionAnchor
        href={href}
        text={text}
      />
    </StyledDiv>
  </HeroImage>
);

CallToAction.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default CallToAction;
