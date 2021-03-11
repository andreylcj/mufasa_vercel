import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import GraphContainer from '../../../components/GraphContainer';
import { theme } from '../../../db.json';

function Home() {
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

  const translate = parseFloat(theme.measuresPatterns.header.height.general.replace('px', ''))
  + parseFloat(theme.measuresPatterns.subNav.height.general.replace('px', ''))
  + parseFloat(theme.measuresPatterns.timeSelectBar.height.general.replace('px', ''));

  return (
    <GraphContainer style={{ transform: `translateY(${translate}px)` }}>
      <GraphContainer.Bg>
        <h3>Gráfico</h3>
        <p>Em breve...</p>
      </GraphContainer.Bg>
    </GraphContainer>
  );
}

export default Home;
