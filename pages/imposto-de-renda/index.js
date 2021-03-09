import React, { useState } from 'react';
import GraphContainer from '../../components/GraphContainer';
import MonthSale from '../../sections/MonthSale';
import TaxRect from '../../sections/TaxRectangle';

function IncomeTax() {
  const data = {
    total: 231.23,
    tax: {
      swing: 32.12,
      dayTrade: 21.23,
      fii: 12.32,
    },
    compensation: {
      swing: 12.12,
      dayTrade: 1.23,
      fii: 2.32,
    },
    sale: 503.12,
    sales: [
      {
        ticker: 'BRML3',
        value: 123.23,
        date: 'Seg, 01 de FEV',
      },
      {
        ticker: 'BRPR3',
        value: 12.23,
        date: 'Seg, 01 de FEV',
      },
      {
        ticker: 'HASG3',
        value: 1.23,
        date: 'Seg, 01 de FEV',
      },
      {
        ticker: 'XINA11',
        value: 1232.23,
        date: 'Seg, 01 de FEV',
      },
      {
        ticker: 'BRML3',
        value: 123.23,
        date: 'Seg, 01 de FEV',
      },
      {
        ticker: 'BRML3',
        value: 123.23,
        date: 'Seg, 01 de FEV',
      },
      {
        ticker: 'BRML3',
        value: 123.23,
        date: 'Seg, 01 de FEV',
      },
      {
        ticker: 'BRML3',
        value: 123.23,
        date: 'Seg, 01 de FEV',
      },
      {
        ticker: 'BRML3',
        value: 123.23,
        date: 'Seg, 01 de FEV',
      },
      {
        ticker: 'BRML3',
        value: 123.23,
        date: 'Seg, 01 de FEV',
      },
      {
        ticker: 'BRML3',
        value: 123.23,
        date: 'Seg, 01 de FEV',
      },
      {
        ticker: 'BRML3',
        value: 123.23,
        date: 'Seg, 01 de FEV',
      },
      {
        ticker: 'BRML3',
        value: 123.23,
        date: 'Seg, 01 de FEV',
      },
      {
        ticker: 'BRML3',
        value: 123.23,
        date: 'Seg, 01 de FEV',
      },
      {
        ticker: 'BRML3',
        value: 123.23,
        date: 'Seg, 01 de FEV',
      },
      {
        ticker: 'BRML3',
        value: 123.23,
        date: 'Seg, 01 de FEV',
      },
      {
        ticker: 'BRML3',
        value: 123.23,
        date: 'Seg, 01 de FEV',
      },
      {
        ticker: 'BRML3',
        value: 123.23,
        date: 'Seg, 01 de FEV',
      },
      {
        ticker: 'BRML3',
        value: 123.23,
        date: 'Seg, 01 de FEV',
      },
      {
        ticker: 'BRML3',
        value: 123.23,
        date: 'Seg, 01 de FEV',
      },
      {
        ticker: 'BRML3',
        value: 123.23,
        date: 'Seg, 01 de FEV',
      },
    ],
  };

  const [taxHeight, setTaxHeight] = useState(0);
  return (
    <GraphContainer
      style={{
        flexWrap: 'wrap',
        flexDirection: 'initial',
        padding: '5vh 15vw',
        justifyContent: 'space-around',
      }}
    >
      <TaxRect data={data} setTaxHeight={setTaxHeight} />
      <MonthSale sales={data.sales} maxHeight={taxHeight} />

    </GraphContainer>
  );
}

export default IncomeTax;
