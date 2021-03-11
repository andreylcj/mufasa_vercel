import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { DataContext } from '../../../store/GlobalState';
import { theme } from '../../../db.json';

const GraphContainer = styled.div`
  min-height: calc(100vh 
  - ${theme.measuresPatterns.header.height.general}
  - ${theme.measuresPatterns.subNav.height.general}
  - ${theme.measuresPatterns.timeSelectBar.height.general}
  );
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
`;

GraphContainer.Bg = styled.div`
  border-radius: 20px;
  background: #fff;
  width: 80vw;
  height: 70vh;
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;

  @media(min-width: 1024px){
    width: 65vw;
  }

`;

function Home() {
  const [state, dispatch] = useContext(DataContext);
  const { auth } = state;

  const router = useRouter();

  const translate = parseFloat(theme.measuresPatterns.header.height.general.replace('px', ''))
  + parseFloat(theme.measuresPatterns.subNav.height.general.replace('px', ''));

  return (
    <GraphContainer style={{ transform: `translateY(${translate}px)` }}>
      <GraphContainer.Bg>
        <h3>Posições</h3>
        <p>Em breve...</p>
      </GraphContainer.Bg>
    </GraphContainer>
  );
}

export default Home;
