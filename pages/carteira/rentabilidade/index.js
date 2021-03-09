import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { DataContext } from '../../../store/GlobalState';
import GraphContainer from '../../../components/GraphContainer';

function Home() {
  const [state, dispatch] = useContext(DataContext);
  const { auth } = state;

  const router = useRouter();
  const { pathname, query } = router;

  // push to /carteira?rentabilidade if has no query
  const initialQuery = {
    periodo: 'no-mes',
  };
  useEffect(() => {
    if (Object.keys(query).length === 0) {
      router.push({
        pathname,
        query: initialQuery,
      });
    }
  }, [query]);

  return (
    <GraphContainer>
      <GraphContainer.Bg>
        <h3>Gráfico</h3>
        <p>Em breve...</p>
      </GraphContainer.Bg>
    </GraphContainer>
  );
}

export default Home;
