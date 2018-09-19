import React from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import Header from '../organisms/Header';
import SubNavigation from '../organisms/SubNavigation';

const StyledLayout = glamorous.div({
  '& .mainContent': {
    flex: 2,
  },
  '& .sideContent': {
    flex: 1,
  },
  display: 'flex',
  margin: 20,
  position: 'relative',
});

const SideColumn = ({ children, sideContent }) => (
  <div>
    <Header />
    <SubNavigation />
    <StyledLayout>
      <section className="mainContent">
        {children}
      </section>
      <section className="sideContent">
        {sideContent}
      </section>
    </StyledLayout>
  </div>
);

SideColumn.propTypes = {
  children: PropTypes.node.isRequired,
  sideContent: PropTypes.node.isRequired,
};

export default SideColumn;
