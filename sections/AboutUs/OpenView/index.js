import React from 'react';
import styled from 'styled-components';

const SecContainer = styled.div`
  position:relative;
  min-height: calc(100vh - 80px);
`;

const ImageBg = styled.div`
  background-image: url("/images/aboutus/Lion_Laid.png");
  background-size: cover;
  background-repeat: no-repeat;
  min-height: calc(100vh - 80px);
  transform: scale(1.1); 
  filter: blur(6px);
  -webkit-filter: blur(6px);
  z-index: -1;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const BlackBg = styled.div`
  background-color: rgba(0,0,0,0.65);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const FeaturedTitle = styled.div`
  text-align: center;
  padding-top: 10vh;

  p{
    display: contents;
    text-align: center;
    color: #707070;
    font-size: 1.75rem;
    font-weight: 600;

    &:after{
      content: '';
      border-bottom: 2px solid #707070;
      width: 100px;
      display: block;
      height: 1px;
      margin: auto;
      margin-top: 15px;
    }
  }
`;

function OpenViewAboutUs() {
  return (
    <SecContainer>

      <FeaturedTitle>
        <p>
          No ano de 2020, mais de um milhão de
          <br />
          brasileiros caiu na malha fina.
        </p>

      </FeaturedTitle>

      <div style={{ paddingLeft: '10vw', paddingTop: '20vh', textAlign: 'left' }}>
        <Title style={{ flexDirection: 'row', justifyContent: 'start' }}>
          Quem Somos
        </Title>
        <Text>
          O Mufasa é uma fintech brasileira especializada na tributação
          <br />
          relacionada ao mercado de investimentos.
          <br />
          <br />
          Lidar com tributos é uma tarefa complexa, principalmente em
          <br />
          um contexto de regras cada vez menos claras.
          <br />
          <br />
          Sabemos que o tempo dos traders é
          {' '}
          <OrangeColor>precioso</OrangeColor>
          {' '}
          demais para ser
          <br />
          gasto se preocupando com impostos. Por isso, temos por
          <br />
          objetivo
          {' '}
          <OrangeColor>facilitar</OrangeColor>
          {' '}
          a vida do investidor.
          <br />
        </Text>
      </div>

      <div style={{
        paddingRight: '10vw', paddingTop: '20vh', paddingBottom: '20vh', textAlign: 'right',
      }}
      >
        <Title style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          Nossa Missão
        </Title>
        <Text>
          "Proporcionar
          {' '}
          <OrangeColor>conforto</OrangeColor>
          {' '}
          e desenvolver soluções que possibilitem aos
          <br />
          nossos clientes obter melhores
          {' '}
          <OrangeColor>resultados</OrangeColor>
          {' '}
          em suas atividades
          <br />
          financeiras."
          <br />
          <br />
          Ao assumir a responsabilidade da parte tributária do trade, a nossa
          <br />
          empresa possibilita aos clientes focar seu tempo e energia no que
          <br />
          realmente importa:
          {' '}
          <OrangeColor>Os investimentos</OrangeColor>
          .
        </Text>
      </div>

      <ImageBg>
        <BlackBg />
      </ImageBg>
    </SecContainer>
  );
}

const ArticleContainer = styled.div`
`;

const Title = styled.h3`

color: ${({ theme }) => theme.colors.lightMufasaOrange};
margin-bottom: 20px;
display: flex;
align-items: center;

&:before{
  content: '';
  border-left: 4px solid ${({ theme }) => theme.colors.mufasaOrange};
  width: 1px;
  display: block;
  height: 30px;
  margin-right: 20px;
}
`;
const Text = styled.p`
  display: contents;
  color: #fff;
`;

const OrangeColor = styled.strong`
  color: ${({ theme }) => theme.colors.lightMufasaOrange};
`;

function ContentArticle({ title, children }) {
  return (
    <ArticleContainer>
      <Title>
        {title}
      </Title>
      <Text>
        {children}
      </Text>
    </ArticleContainer>
  );
}

export default OpenViewAboutUs;
