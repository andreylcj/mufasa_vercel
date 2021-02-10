import React from 'react';
import styled from 'styled-components';
import ButtonUnderlineHover from '../../snnipets/ButtonUnderlineHover';

const SectionContainer = styled.div`
  min-height: calc(100vh - 80px);
  background: #fff;
  padding: 10vh 10vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }

  @media (min-width: 768px) {
    flex: 0 0 41.6666%;
    max-width: 41.6666%;
    margin-left: 8.3333%;
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

  @media (min-width: 768px) {
    flex: 0 0 50%;
    max-width: 50%;
    padding-right: 16px;
    padding-left: 16px;
  }

  @media (min-width: 1024px) {
    flex: 0 0 45%;
    max-width: 45%%;
  }

  img{
    width: 100%;
  }


`;

function WalletLp() {
  return (
    <SectionContainer>
      <SideText>
        <h3>
          Carteira
        </h3>
        <p>
          Importe seus dados do
          <br />
          CEI (Canal Eletrônico do
          <br />
          Investidor), e acesse em
          <br />
          tempo real seu extrato
          <br />
          para analisar a evolução
          <br />
          da sua carteira.
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
        <img src="/images/wallet/wallet_accompaniment.png" alt="Acompanhamento de Carteira" />
      </ImgContainer>
    </SectionContainer>
  );
}

export default WalletLp;
