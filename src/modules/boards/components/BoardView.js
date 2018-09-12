import React from 'react';
import glamorous from 'glamorous';
import { withRouter } from 'react-router';
import SingleColumn from '../../../components/layout/SingleColumn';
import CtcSwitchGroup from '../../../components/molecules/CtcSwitchGroup';

const BoardWrapper = glamorous.div({
  '& .positionLight': {
    backgroundColor: 'yellow',
    borderRadius: '10px',
    height: '20px',
    position: 'absolute',
    width: '20px',
  },
  background: '#566E58',
  height: '500px',
  position: 'relative',
});

@withRouter
class BoardView extends React.Component {
  render() {
    return (
      <SingleColumn>
        <h2>CA</h2>
        <BoardWrapper>
          <div id="positionLight1" className="positionLight" />
          <svg width="1426px" height="245px" viewBox="0 0 1426 245" version="1.1">
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="CA">
                <rect id="Base" fill="#1A1A1A" x="0" y="0" width="1425.74219" height="245"></rect>
                <g id="Mainline" transform="translate(14.000000, 49.000000)" fill="#F8F8F8">
                    <rect id="29-9" x="0" y="0" width="156" height="15"></rect>
                    <rect id="29-1" x="0" y="94" width="156" height="15"></rect>
                    <rect id="30-9" x="166" y="0" width="156" height="15"></rect>
                    <rect id="30-1" x="166" y="94" width="261.636025" height="15"></rect>
                    <rect id="X30E" transform="translate(250.859650, 54.800776) rotate(-45.000000) translate(-250.859650, -54.800776) " x="180.85965" y="47.3007755" width="140" height="15"></rect>
                    <rect id="X30E" transform="translate(544.253906, 31.151650) scale(-1, 1) rotate(-45.000000) translate(-544.253906, -31.151650) " x="507.69882" y="23.6516504" width="73.1101731" height="15"></rect>
                    <rect id="X33W" transform="translate(1100.151650, 32.151650) rotate(-45.000000) translate(-1100.151650, -32.151650) " x="1063.59656" y="24.6516504" width="73.1101731" height="15"></rect>
                    <rect id="X31W" transform="translate(631.151650, 78.733682) scale(-1, 1) rotate(-315.000000) translate(-631.151650, -78.733682) " x="594.596564" y="71.2336817" width="73.1101731" height="15"></rect>
                    <rect id="X32" transform="translate(792.284463, 31.151650) scale(-1, 1) rotate(-315.000000) translate(-792.284463, -31.151650) " x="755.729376" y="23.6516504" width="73.1101731" height="15"></rect>
                    <rect id="X32" transform="translate(1012.500000, 78.151650) rotate(-315.000000) translate(-1012.500000, -78.151650) " x="977" y="70.6516504" width="71" height="15"></rect>
                    <rect id="31/32-8" x="332" y="0" width="900" height="15"></rect>
                    <rect id="31/32-1" x="437.636025" y="94" width="533.610068" height="15"></rect>
                    <rect id="31/32-9" x="565" y="48" width="515" height="15"></rect>
                    <rect id="33-9" x="1242" y="0" width="156" height="15"></rect>
                    <rect id="33-1" x="981" y="94" width="416.753906" height="15"></rect>
                </g>
                <g id="Spurs" transform="translate(373.000000, 15.000000)" fill="#F8F8F8">
                    <rect id="31-6" transform="translate(55.152543, 20.152543) rotate(-45.000000) translate(-55.152543, -20.152543) " x="30.1525433" y="16.6525433" width="50" height="7"></rect>
                    <rect id="32-7" transform="translate(278.000000, 20.152543) rotate(-45.000000) translate(-278.000000, -20.152543) " x="253" y="16.6525433" width="50" height="7"></rect>
                    <rect id="TY33-1" transform="translate(546.152543, 20.152543) scale(-1, 1) rotate(-45.000000) translate(-546.152543, -20.152543) " x="521.152543" y="16.6525433" width="50" height="7"></rect>
                    <rect id="TY33-1" transform="translate(780.883012, 20.152543) scale(-1, 1) rotate(-45.000000) translate(-780.883012, -20.152543) " x="755.883012" y="16.6525433" width="50" height="7"></rect>
                    <rect id="TY32-6" transform="translate(593.660356, 155.152543) scale(-1, 1) rotate(-45.000000) translate(-593.660356, -155.152543) " x="568.660356" y="151.652543" width="50" height="7"></rect>
                    <rect id="TY32-7" transform="translate(505.847457, 155.152543) rotate(-45.000000) translate(-505.847457, -155.152543) " x="480.847457" y="151.652543" width="50" height="7"></rect>
                    <rect id="30-2" transform="translate(20.847457, 154.152543) rotate(-45.000000) translate(-20.847457, -154.152543) " x="-4.15254326" y="150.652543" width="50" height="7"></rect>
                </g>
                </g>
              </g>
          </svg>
          <CtcSwitchGroup
            hideRight={true}
            name="S1"
            type="Signal"
          />
        </BoardWrapper>
      </SingleColumn>
    );
  }
}

export default BoardView;
