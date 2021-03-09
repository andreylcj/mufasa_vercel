import React from 'react';
import styled from 'styled-components';
import GraphContainer from '../../components/GraphContainer';

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
  };
  const TaxLineWidth = `${data.sale / 200 > 100 ? '100' : data.sale / 200}%`;
  return (
    <GraphContainer
      style={{
        flexWrap: 'wrap',
        flexDirection: 'initial',
        padding: '5vh 15vw',
        justifyContent: 'space-around',
      }}
    >
      <TaxRectangle>
        <TaxRectangle.Title>
          <span>
            {`R$ ${data.total.toString().replace('.', ',')}`}
          </span>
          <span>Imposto Total</span>
        </TaxRectangle.Title>
        <TaxRectangle.Content>
          <h5>
            Imposto
          </h5>

          <div>
            <span>
              Swing Trade
            </span>
            <span>
              {`R$ ${data.tax.swing.toString().replace('.', ',')}`}
            </span>
          </div>

          <div>
            <span>
              Day Trade
            </span>
            <span>
              {`R$ ${data.tax.dayTrade.toString().replace('.', ',')}`}
            </span>
          </div>

          <div>
            <span>
              FII
            </span>
            <span>
              {`R$ ${data.tax.fii.toString().replace('.', ',')}`}
            </span>
          </div>
        </TaxRectangle.Content>

        <TaxRectangle.Content>
          <h5>
            Compensação de Prejuízo
          </h5>

          <div>
            <span>
              Swing Trade
            </span>
            <span>
              {`R$ ${data.compensation.swing.toString().replace('.', ',')}`}
            </span>
          </div>

          <div>
            <span>
              Day Trade
            </span>
            <span>
              {`R$ ${data.compensation.dayTrade.toString().replace('.', ',')}`}
            </span>
          </div>

          <div>
            <span>
              FII
            </span>
            <span>
              {`R$ ${data.compensation.fii.toString().replace('.', ',')}`}
            </span>
          </div>
        </TaxRectangle.Content>

        <div
          className="separate-line"
        />

        <TaxRectangle.Content>
          <TaxRectangle.TaxBottomInfo>
            <div
              className="d-flex-alig-justify-center"
            >
              <h6>Total de Vendas</h6>
              <span>Swing Trade | Ações</span>
            </div>
            <span style={{ whiteSpace: 'pre-line', minWidth: '150px', fontSize: '1.4rem' }}>
              {`R$ ${data.sale.toString().replace('.', ',')}`}
            </span>
          </TaxRectangle.TaxBottomInfo>

          <TaxRectangle.LineTax>
            <div>
              <div
                className="first-line-tax"
              >
                <div>
                  <div>
                    <span>R$ 0,00</span>
                    <span>R$ 20.000,00</span>
                  </div>
                  <div>
                    <div
                      style={{
                        width: TaxLineWidth,
                        height: '100%',
                      }}
                      className="blue-bg"
                    />
                  </div>
                </div>
              </div>
              <div
                className="final-line-tax"
              >
                <div />
              </div>
            </div>
            <div style={{ fontWeight: 'bold', fontSize: '0.875rem', marginTop: '7px' }}>
              SUJEITO À ISENÇÃO
            </div>
          </TaxRectangle.LineTax>
        </TaxRectangle.Content>

      </TaxRectangle>

      <MonthSales>
        sales
      </MonthSales>

    </GraphContainer>
  );
}

const MonthSales = styled.div`
`;

const TaxRectangle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  box-shadow: rgb(0 0 0 / 25%) 0px 1px 2px;
  min-width: 400px;

  .d-flex-alig-justify-center{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .separate-line{
    background: ${({ theme }) => theme.colors.blueGradienteBg};
    height: 9px;
    width: 100%;
  }

  .blue-bg{
    background: ${({ theme }) => theme.colors.orangeMufasaGradient};               
  }
`;

TaxRectangle.Title = styled.div`
  background: ${({ theme }) => theme.colors.taxRectangleYellow};
  background: ${({ theme }) => theme.colors.blueGradienteBg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 20px 0;
  font-size: 25px;
  width: 100%;
`;

TaxRectangle.TaxBottomInfo = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div{
    flex-direction: column !important;

    *{
      align-self: flex-start;
      padding: 0 !important;
    }

    h6{
      margin: 0;
      font-size: 1.2rem;
    }
  }
`;

TaxRectangle.LineTax = styled.div`
  margin-top: 50px;
  flex-direction: column !important;
  display: flex;
  justify-content: center;
  align-items: center;

  div:nth-child(1){

    .first-line-tax{
      width: 80%;
      div{
        width:100%;
        justify-content: space-between;
        flex-direction: column;

        div{
          width:100%;
          justify-content: space-between;
          flex-direction: row;
        }

        div:nth-child(2){
          background: #c3c1c1;
          height: 9px;
        }
      }
    }
    .final-line-tax{
      width: 20%;
      height: 100%;
      align-items: baseline;
      div{
        background: #c3c1c1;
        height: 9px;
        width: 60%;
      }
    }
  
    width: 100%;
    justify-content: center;
    flex-direction: row;
    align-items: flex-end;
  }

  div:nth-child(2){
    width: 100%;
    justify-content: center;
  }
`;

TaxRectangle.Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 25px 20px;

  div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    span{
      padding: 3px 0;
    }
  }
`;

export default IncomeTax;
