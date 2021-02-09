import React from 'react';
import styled from 'styled-components';
import ButtonUnderlineHover from '../../snnipets/ButtonUnderlineHover';

const SectionContainer = styled.div`
  min-height: calc(100vh - 80px);
  background: ${({ theme }) => theme.colors.lightGrayBg};;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

const SideText = styled.div`
  text-align:left;
  box-sizing: border-box;
  -webkit-box-flex: 1;
  max-width: 100%;
  flex: 0 0 100%;
  padding-right: 8px;
  padding-left: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 0;

  @media (min-width: 1024px) {
    flex: 0 0 41.6666%;
    max-width: 41.6666%;
    margin-left: 8.3333%;
    padding: 10vh 0 10vh 10vw;
  }

  h3{
    color: ${({ theme }) => theme.colors.mufasaOrange};
    font-weight: 500;
    font-size: 3rem;
  }

  p{
    color: ${({ theme }) => theme.colors.fullBlack};
    max-width: 20rem;
    font-size: 1.5rem;
    display: contents;
  }
`;

const ImgContainer = styled.div`
  box-sizing: border-box;
  -webkit-box-flex: 1;
  max-width: 100%;
  flex: 0 0 100%;
  padding-right: 0px;
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: flex-end;
  flex-grow: 1;

  @media (min-width: 768px) {
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media (min-width: 1024px) {
    flex: 0 0 45%;
    max-width: 45%%;
  }

  img{
    width: 100%;
  }


`;

function CalculatorLp() {
  return (
    <SectionContainer>
      <SideText>
        <h3>
          Calculadora
        </h3>
        <p>
          Calcule seus impostos de
          {' '}
          <br />
          forma 100% automática,
          <br />
          levando em conta as
          {' '}
          <br />
          movimentações e as
          {' '}
          <br />
          compensações acumuladas.
          <br />
        </p>
        <ButtonUnderlineHover
          href="/entrar"
          color="#c95206"
          bg="linear-gradient(120deg, rgba(201,82,6,1) 0%, rgba(201,82,6,1) 100%)"
          otherStyles={{
            margin: '20px auto 0 0',
            fontSize: '1.125rem',
          }}
        >
          Quero começar
          <i className="fas fa-arrow-right" style={{ marginLeft: '10px' }} />
        </ButtonUnderlineHover>
      </SideText>
      <ImgContainer>
        <img src="/images/landingPage/handsHoldingCalculator.png" alt="Acompanhamento de Carteira" />
      </ImgContainer>
    </SectionContainer>
  );
}

export default CalculatorLp;
