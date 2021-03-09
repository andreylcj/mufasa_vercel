import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { DataContext } from '../../store/GlobalState';

const GraphContainer = styled.div`
  min-height: calc(100vh 
  - ${({ theme }) => theme.measuresPatterns.header.height.general}
  - ${({ theme }) => theme.measuresPatterns.subNav.height.general}
  - ${({ theme }) => theme.measuresPatterns.timeSelectBar.height.general}
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
  const { pathname, query } = router;

  // push to /carteira?rentabilidade if has no query
  const initialQuery = {
    opcao: 'rentabilidade',
    periodo: 'no-mes',
  };
  useEffect(() => {
    if ((Object.keys(query).length < 2) && pathname === '/carteira') {
      router.push({
        pathname,
        query: {
          ...initialQuery,
          ...query,
        },
      });
    }
  }, [query]);

  return (
    <GraphContainer>
      <GraphContainer.Bg>
        <p>Gráfico...</p>
      </GraphContainer.Bg>
    </GraphContainer>
  );
}

export default Home;
