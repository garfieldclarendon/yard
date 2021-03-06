import React from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import { zIndex } from 'config/styles';
import Header from '../organisms/Header';
import SubNavigation from '../organisms/SubNavigation';

const StyledSection = glamorous.section({
  margin: 20,
  position: 'relative',
  zIndex: zIndex.layout,
});

const SingleColumn = ({ children }) => (
  <div>
    <Header />
    <SubNavigation />
    <StyledSection>
      {children}
    </StyledSection>
  </div>
);

SingleColumn.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SingleColumn;
