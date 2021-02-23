import React from 'react';
import SecContainer from '../../../components/AboutUs/OpenView';

function OpenViewAboutUs() {
  return (
    <SecContainer>
      <SecContainer.FeaturedTitle>
        <p>
          No ano de 2020, mais de um milhão de
          brasileiros caiu na malha fina.
        </p>
      </SecContainer.FeaturedTitle>

      <div style={{ paddingLeft: '10vw', paddingTop: '20vh', textAlign: 'left' }}>
        <SecContainer.Title style={{ flexDirection: 'row', justifyContent: 'start' }}>
          Quem Somos
        </SecContainer.Title>
        <SecContainer.Text>
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
          <SecContainer.OrangeColor>precioso</SecContainer.OrangeColor>
          {' '}
          demais para ser
          <br />
          gasto se preocupando com impostos. Por isso, temos por
          <br />
          objetivo
          {' '}
          <SecContainer.OrangeColor>facilitar</SecContainer.OrangeColor>
          {' '}
          a vida do investidor.
          <br />
        </SecContainer.Text>
      </div>

      <div style={{
        paddingRight: '10vw', paddingTop: '20vh', paddingBottom: '20vh', textAlign: 'right',
      }}
      >
        <SecContainer.Title style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          Nossa Missão
        </SecContainer.Title>
        <SecContainer.Text>
          "Proporcionar
          {' '}
          <SecContainer.OrangeColor>conforto</SecContainer.OrangeColor>
          {' '}
          e desenvolver soluções que possibilitem aos
          <br />
          nossos clientes obter melhores
          {' '}
          <SecContainer.OrangeColor>resultados</SecContainer.OrangeColor>
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
          <SecContainer.OrangeColor>Os investimentos</SecContainer.OrangeColor>
          .
        </SecContainer.Text>
      </div>

      <SecContainer.ImageBg>
        <SecContainer.BlackBg />
      </SecContainer.ImageBg>
    </SecContainer>
  );
}

export default OpenViewAboutUs;
