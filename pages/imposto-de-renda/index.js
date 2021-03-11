import React, { useState } from 'react';
import GraphContainer from '../../components/GraphContainer';
import MonthSale from '../../sections/MonthSale';
import NewUserAddCeiInfo from '../../sections/NewUserAddCeiInfo';
import TaxRect from '../../sections/TaxRectangle';
import { theme } from '../../db.json';
import { monthSales } from '../../constants';

function IncomeTax() {
  const data = monthSales;

  const [taxHeight, setTaxHeight] = useState(0);
  const oldUser = false;

  const translate = parseFloat(theme.measuresPatterns.header.height.general.replace('px', ''))
  + parseFloat(theme.measuresPatterns.subNav.height.general.replace('px', ''))
  + parseFloat(theme.measuresPatterns.timeSelectBar.height.general.replace('px', ''));
  return (
    <GraphContainer
      style={{
        flexWrap: 'wrap',
        flexDirection: 'initial',
        padding: '5vh 10vw',
        justifyContent: 'space-around',
        transform: !oldUser ? `translateY(${theme.measuresPatterns.header.height.general})` : `translateY(${translate}px)`,
      }}
    >
      {
      oldUser ? (
        <>
          <TaxRect data={data} setTaxHeight={setTaxHeight} />
          <MonthSale sales={data.sales} maxHeight={taxHeight} />
        </>
      ) : (
        <NewUserAddCeiInfo />
      )
    }

    </GraphContainer>
  );
}

export default IncomeTax;
