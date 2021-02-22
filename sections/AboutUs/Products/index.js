import React from 'react';
import styled from 'styled-components';
import ServiceProductItem from '../../../components/AboutUs/ServiceProductItem';

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.softPurpleBg};
  min-height: calc(100vh - 80px);
  padding-top: ${({ theme }) => theme.measuresPatterns.header.height.general};
  padding-bottom: 10vh;

  @media(min-width: 1024px){
    padding-top: ${({ theme }) => theme.measuresPatterns.header.height.minWidth1024};
  }
`;

Container.FreeService = styled.div`
  /*display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 16px 24px;
  grid-template-rows: auto;*/
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 8vw;
  width: 100%;

  @media(min-width: 768px){
  }

  @media(min-width: 1024px){
    padding: 0 5vw;
  }
`;

Container.Service = styled.div`
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  min-height: calc(100vh - ${({ theme }) => theme.measuresPatterns.header.height.general});

  @media(min-width: 1024px){
    min-height: calc(100vh - ${({ theme }) => theme.measuresPatterns.header.height.minWidth1024});
  }

  h3{
    margin-bottom: 20px;
    margin-top: 20px;
  }
`;

function Products() {
  const freeServices = [
    {
      srcIcon: '/images/icons/SlicesBLACK.webp',
      title: 'Sincronização CEI',
      alt: 'Sincronização CEI',
      desc1: 'Tenha sua',
      strong: 'Carteira de Investimentos',
      desc2: 'sincronizada em tempo real. Monitore suas movimentações, acompanhe as valorizações, e acesse o histórico de sua evolução.',
    },
    {
      srcIcon: '/images/icons/CalcTrans.webp',
      title: 'Calculadora de IR',
      alt: 'Calculadora de IR',
      desc1: 'Seu',
      strong: 'Imposto de Renda em ações',
      desc2: 'calculado de forma 100% automática e rápida, levando em conta as movimentações e as compensações acumuladas.',
    },
    {
      srcIcon: '/images/icons/darftrans.webp',
      title: 'Emissão do DARF',
      alt: 'Emissão do DARF',
      desc1: 'Quando há imposto a ser pago, Mufasa gera seu DARF, já considerando os diversos mercados, e as compensações de prejuízos e IRRF.',
      strong: 'É só gerar e pagar!',
      desc2: '',
    },
  ];

  const paidServices = [
    {
      srcIcon: '/images/icons/CalcTrans.webp',
      title: 'Pagamento Automático',
      alt: 'Pagamento Automático',
      desc1: 'Ative o Pagamento Automático e',
      strong: 'nunca mais se preocupe',
      desc2: 'com seus Impostos. Foque em suas operações e Mufasa cuidará de todo o resto.',
    },
  ];

  return (
    <Container
      id="produtos"
    >
      <Container.Service>
        <h3>
          Serviços Gratuitos
        </h3>
        <Container.FreeService>
          {
              freeServices.map((service, index) => {
                const serviceId = `freeService__${index}`;
                return (
                  <ServiceProductItem
                    key={serviceId}
                    item={service}
                  />
                );
              })
            }
        </Container.FreeService>
      </Container.Service>

      <Container.Service
        style={{
          marginTop: '15vh',
        }}
      >
        <h3>
          Serviços Premium
        </h3>
        <Container.FreeService>
          {
            paidServices.map((service, index) => {
              const serviceId = `paidService__${index}`;
              return (
                <ServiceProductItem
                  key={serviceId}
                  item={service}
                />
              );
            })
            }
        </Container.FreeService>
      </Container.Service>

    </Container>
  );
}

export default Products;
