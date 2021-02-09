import React from 'react';
import styled from 'styled-components';
import AutomaticPayment from '../sections/AutomaticPayment';
import CalculatorLp from '../sections/CalculatorLp';
import DarfLp from '../sections/DarfLp';
import OnlyInMufasa from '../sections/OnlyInMufasa';
import OpenViewFormSection from '../sections/OpenViewFormSection';
import WalletLp from '../sections/WalletLp';

const LionBack = styled.div`
  background-image: url("/images/LionBg/LpLion.jpg");
  background-position-y: -65vh;
  background-size: cover;
  background-repeat: no-repeat;
`;

function Home() {
  return (
    <div>
      <LionBack>
        <OpenViewFormSection />
        <OnlyInMufasa />
      </LionBack>
      <WalletLp />
      <CalculatorLp />
      <DarfLp />
      <AutomaticPayment />
    </div>

  );
}

export default Home;
