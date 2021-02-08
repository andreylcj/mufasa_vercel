import React from 'react';
import styled from 'styled-components';
import OnlyInMufasa from '../OnlyInMufasa';
import OpenViewFormSection from '../OpenViewFormSection';

const LionBack = styled.div`
  background-image: url("/images/LionBg/LpLion.jpg");
  background-position-y: -65vh;
  background-size: cover;
  background-repeat: no-repeat;
`;

function LionContainer() {
  return (
    <LionBack>
      <OpenViewFormSection />
      <OnlyInMufasa />
    </LionBack>
  );
}

export default LionContainer;
