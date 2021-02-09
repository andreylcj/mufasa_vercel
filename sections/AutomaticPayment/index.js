import React from 'react';
import styled from 'styled-components';
import ButtonUnderlineHover from '../../snnipets/ButtonUnderlineHover';

const SectionContainer = styled.div`
 overflow: hidden;
 position: relative;
`;

const BgImage = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  background-image: url('/images/landingPage/Man_Paying.png');
  min-height: calc(100vh - 80px);
  max-height: calc(100vh - 80px);
  display: flex;
  transform: scale(1.1); 
  filter: blur(3px);
  -webkit-filter: blur(3px);
`;

const Bg = styled.div`
  background-color: rgba(265,265,265,0.3);
  width: 100%;
`;

const Text = styled.div`
  text-align:left;
  box-sizing: border-box;
  -webkit-box-flex: 1;
  max-width: 100%;
  flex: 0 0 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  position: absolute;
  top: 20%;
  left: 10%;

  @media (min-width: 1024px) {
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

function AutomaticPayment() {
  return (
    <SectionContainer>
      <BgImage>
        <Bg />
      </BgImage>
      <Text>
        <h3>
          Pagamento Automático
        </h3>
        <p>
          A Calculadora do Mufasa,
          <br />
          além de realizar os cálculos,
          <br />
          disponibiliza a impressão do
          <br />
          DARF quando você opera
          <br />
          com lucro.
          <br />
        </p>
        <ButtonUnderlineHover
          href="/entrar"
          color="#C95206"
          bg="linear-gradient(120deg, #C95206 0%, #C95206 100%)"
          otherStyles={{
            margin: '20px auto 0 0',
            fontSize: '1.125rem',
          }}
        >
          Quero começar
          <i className="fas fa-arrow-right" style={{ marginLeft: '10px' }} />
        </ButtonUnderlineHover>
      </Text>
    </SectionContainer>
  );
}

export default AutomaticPayment;
