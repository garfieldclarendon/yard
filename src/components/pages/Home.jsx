import React from 'react';
import SingleColumn from '../layout/SingleColumn';
import CallToAction from '../molecules/CallToAction';

const Home = () => (
  <div>
    <SingleColumn>
      <CallToAction
        href="routes"
        text="LCS"
      />
    </SingleColumn>
  </div>
);

export default Home;
