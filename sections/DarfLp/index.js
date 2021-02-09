import React from 'react';
import styled from 'styled-components';
import ButtonUnderlineHover from '../../snnipets/ButtonUnderlineHover';

const SectionContainer = styled.div`
  min-height: calc(100vh - 80px);
  max-height: calc(100vh - 80px);
  display: grid;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  background-image: url('/images/landingPage/Darf3DCut.png');

`;

const Bg = styled.div`
  background-color: rgba(0,0,0,0.65);
  width: 100%;
  height:100%;

`;

const Text = styled.div`
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
  padding: 10vh 0 10vh 20vw;
  height: 100%;

  @media (min-width: 1024px) {
    margin-left: 8.3333%;
  }

  h3{
    color: #8E8E8E;
    font-weight: 500;
    font-size: 3rem;
  }

  p{
    color: ${({ theme }) => theme.colors.fullWhite};
    max-width: 20rem;
    font-size: 1.5rem;
    display: contents;
  }
`;

function DarfLp() {
  return (
    <SectionContainer>
      <Bg>
        <Text>
          <h3>
            DARF
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
            color="#8E8E8E"
            bg="linear-gradient(120deg, #8E8E8E 0%, #8E8E8E 100%)"
            otherStyles={{
              margin: '20px auto 0 0',
              fontSize: '1.125rem',
            }}
          >
            Quero começar
            <i className="fas fa-arrow-right" style={{ marginLeft: '10px' }} />
          </ButtonUnderlineHover>
        </Text>
      </Bg>
    </SectionContainer>
  );
}

export default DarfLp;
