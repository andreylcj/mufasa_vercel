import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const FooterContainer = styled.footer`
  background-color: #313131;
  -webkit-transform: translateY(64px);
  -ms-transform: translateY(64px);
  transform: translateY(64px);
  will-change: transform;
  text-align: center;
  display: grid;
  grid-gap: 24px 50px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  
  @media screen and (min-width: 768px) {
    -webkit-transform: translateY(64px);
    -ms-transform: translateY(64px);
    transform: translateY(64px);
  }
  
  @media screen and (min-width: 1024px){
    -webkit-transform: translateY(80px);
    -ms-transform: translateY(80px);
    transform: translateY(80px);

    -webkit-box-align: center;
    align-items: center;
    row-gap: 0px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    padding: 10vh 5vw;
  }

  h4{
    font-weight: bold;
    color: #fff;
    font-size: 16px;
  }
  p{
    color: #B4B4B4;
    font-weight: regular;
    font-size: 14px;
  }

  ul{
    list-style: none;
    padding: 0;
    margin: 0;
    a{
      text-decoration: none;
      color: #B4B4B4;
    }
  }
`;

const FootColumn = styled.div`
  place-self: flex-start;
  text-align: left;
`;

function Footer() {
  return (
    <FooterContainer>
      <FootColumn>
        <h4>Somos o Mufasa</h4>
        <p>
          Uma plataforma com a missão de facilitar a vida do investidor,
          através de soluções em cálculo e pagamento do Imposto de Renda.
          Com Mufasa, investir é bem mais divertido!
        </p>

      </FootColumn>
      <FootColumn>
        <h4>Contato</h4>
      </FootColumn>
      <FootColumn>
        <h4>Links Úteis</h4>
        <ul>
          <li>
            <Link href="/">
              <a>
                Link 1
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                Link 2
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                Link 3
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                Link 4
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                Link 5
              </a>
            </Link>
          </li>
        </ul>
      </FootColumn>
      <FootColumn>
        <h4>Perguntas Frequentes</h4>
      </FootColumn>
    </FooterContainer>
  );
}

export default Footer;
