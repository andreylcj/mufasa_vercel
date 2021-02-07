import React from 'react';
import styled from 'styled-components';

const DetailContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.85);
  padding: 48px 16px;
  color: #707070;

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px){
    padding: 15vh 8vw 2vh 8vw;
  }

  h1{
    margin-bottom: 50px;
  }
`;

const OnlyMufasa = styled.div`
  /*background-color: #C95206;
  opacity: 0.85;*/

  display: grid;
  justify-items: stretch;
  gap: 24px 16px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto 14rem 6rem 1fr;

  @media (min-width: 768px) {
    min-height: calc(100vh - 4rem);
    gap: 48px 32px;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: auto 1fr;
  }

  @media (min-width: 1024px){
    -webkit-box-align: center;
    align-items: flex-start;
    row-gap: 0px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 1fr;
  }
`;

function OnlyInMufasa() {
  const differentials = [
    {
      title: 'Automação Total',
      description: 'Mufasa possibilita a automação de todas as etapas ao lidar com Impostos: Desde a obtenção da Movimentação até a efetuação do Pagamento à Receita.',
      img_src: '/images/icons/lightbulb/LightBulbg.png',
    },
    {
      title: 'Suporte',
      description: 'Suporte exclusivo para solucionar dúvidas ou demandas 24h por dia.',
      img_src: '/images/icons/support/Supportg.png',
    },
    {
      title: 'Grátis',
      description: 'As principais funções da plataforma estão disponíveis de forma inteiramente gratuita.',
      img_src: '/images/icons/money/Moneyg.png',
    },
    {
      title: 'Interface Amigável',
      description: 'Plataforma simples e intuitiva para que seus impostos de renda de investimentos sejam calculados de forma agradável.',
      img_src: '/images/icons/cellphone/Cellphoneg.png',
    },
    {
      title: 'Multi corretoras',
      description: 'Compatível com todas as corretoras através da integração com o Canal Eletrônico do Investidor.',
      img_src: '/images/icons/diverse/Diverseg.png',
    },
    {
      title: 'Veloz',
      description: 'Com dados atualizados em tempo real, e sincronização da carteira em tempo recorde, pode-se dizer que Mufasa é ágil como todo leão que se preze.',
      img_src: '/images/icons/bolt/Boltg.png',
    },
  ];

  return (
    <DetailContainer>
      <h1>
        DIFERENCIAIS MUFASA
      </h1>
      <OnlyMufasa>
        {
          differentials.map((dif, index) => {
            const difId = `differential__${index}`;
            return (
              <Differentials
                title={dif.title}
                description={dif.description}
                img_src={dif.img_src}
                alt={dif.title}
                key={difId}
              />
            );
          })
        }
      </OnlyMufasa>
    </DetailContainer>
  );
}

const DifCont = styled.div`
  display: flex;

  .img-div{
    display:flex;
    align-items: flex-start;
    justify-content: center;
  }

  .text-div{
    text-align: left;
  }

  img {
    height: 70px;
    width: 70px;
    border: 2px solid #707070;
    border-radius: 100%;
    padding: 5px;
    margin-right: 15px;
  }
`;

function Differentials({
  title, description, img_src, alt,
}) {
  return (
    <DifCont>
      <div className="img-div">
        <img src={img_src} alt={alt} />
      </div>

      <div className="text-div">
        <h3>
          {title}
        </h3>
        <p>
          {description}
        </p>
      </div>

    </DifCont>
  );
}

export default OnlyInMufasa;
