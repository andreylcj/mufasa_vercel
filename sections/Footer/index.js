import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const FooterContainer = styled.footer`
  background-color: #0e0e0e;
  /*-webkit-transform: translateY(${({ theme }) => theme.measuresPatterns.header.height.general});
  -ms-transform: translateY(${({ theme }) => theme.measuresPatterns.header.height.general});
  transform: translateY(${({ theme }) => theme.measuresPatterns.header.height.general});*/
  will-change: transform;
  text-align: center;
  display: grid;
  grid-gap: 50px 25px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto;
  padding: 5vh 5vw;
  font-size: 0.8125rem;
  line-height: 1rem;
  
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 5vh 10vw;
  }
  
  @media screen and (min-width: 1024px){
    /*-webkit-transform: translateY(${({ theme }) => theme.measuresPatterns.header.height.minWidth1024});
    -ms-transform: translateY(${({ theme }) => theme.measuresPatterns.header.height.minWidth1024});
    transform: translateY(${({ theme }) => theme.measuresPatterns.header.height.minWidth1024});*/

    -webkit-box-align: center;
    align-items: center;
    grid-gap: 24px 50px;
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
  }
`;

const FootColumn = styled.div`
  place-self: flex-start;
  text-align: left;
  margin-top: 0;
  
  @media screen and (min-width: 768px) {
    margin-left: 10vw;
  }

  @media screen and (min-width: 1024px) {
    margin-left: 0;
  }
`;

FootColumn.Title = styled.div`
  font-size: 21px;
  color: ${({ theme }) => theme.colors.mufasaOrange};
  font-weight: 500;
  margin-bottom: 15px;
  line-height: 1.25rem;

  @media(max-width: 768px){
    font-size: 1.2rem;
  }
`;

const ListNavItem = styled.li`

  padding: 0px 0px 8px;

  @media(max-width: 768px){
    font-size: 0.8125rem;
  }
  
  a{
    color: #ffffff;
    text-decoration: none;
    display: inline-block;
    font-size: 15px;
  }
  
  a:hover{
    text-decoration: underline;
  }

  i{
    color: #E49447;
  }
  
`;
const ListNavItemSocialMedia = styled.li`
  margin-top: 15px;

  a{
    display: inline-block;
    background-color: #5f5e5e;
    border-radius: 100%;
    width: 40px;
    height: 40px;
    transition: all 0.1s linear;
    top: 0;
    position: relative;
    margin-right: 10px;
  }  

  a:hover{
    cursor: pointer;
    text-decoration: none;
    background-color: ${({ theme }) => theme.colors.mufasaOrange};
    box-shadow: 0 0 10px 2px ${({ theme }) => theme.colors.mufasaOrange};
    top: -6px;
    transform: scale(1.15);
  }

  i{
    font-size: 20px;
    color: #fff;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  
`;

function ListNavSocialIcon({ href, socialMedia }) {
  let classIcon;
  if (socialMedia === 'face') {
    classIcon = 'fab fa-facebook-f';
  } else if (socialMedia === 'insta') {
    classIcon = 'fab fa-instagram';
  } else if (socialMedia === 'youtube') {
    classIcon = 'fab fa-youtube';
  } else if (socialMedia === 'twitter') {
    classIcon = 'fab fa-twitter';
  }
  return (
    <ListNavItemSocialMedia>
      <Link href={href}>
        <a>
          <i className={classIcon} />
        </a>
      </Link>
    </ListNavItemSocialMedia>
  );
}

function ListNav({ text, href }) {
  return (
    <ListNavItem>
      <Link href={href}>
        <a>
          <i className="fas fa-chevron-right" style={{ marginRight: '7px' }} />
          {text}
        </a>
      </Link>
    </ListNavItem>
  );
}

function Footer() {
  return (
    <FooterContainer>
      <FootColumn>
        <FootColumn.Title>Sobre Nós</FootColumn.Title>
        <ul>
          <ListNav text="Nossa Empresa" href="/" />
          <ListNav text="Nosso Time" href="/" />
          <ListNav text="Trabalhe Conosco" href="/" />
          <ListNav text="Imprensa" href="/" />
          <ListNav text="Conteúdo" href="/" />
        </ul>
      </FootColumn>

      <FootColumn>
        <FootColumn.Title>Suporte</FootColumn.Title>
        <ul>
          <ListNav text="Perguntas Frequentes" href="/" />
          <ListNav text="Fale Conosco" href="/" />
        </ul>
      </FootColumn>

      <FootColumn>
        <FootColumn.Title>Perguntas Frequentes</FootColumn.Title>
        <ul>
          <ListNav text="Como Funciona?" href="/" />
          <ListNav text="Como Começar?" href="/" />
          <ListNav text="O que preciso para criar a conta?" href="/" />
          <ListNav text="Não tem nenhuma taxa?" href="/" />
        </ul>
      </FootColumn>

      <FootColumn>
        <FootColumn.Title style={{ marginBottom: '0' }}>Siga o Mufasa</FootColumn.Title>
        <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
          <ListNavSocialIcon href="/" socialMedia="face" />
          <ListNavSocialIcon href="/" socialMedia="insta" />
          <ListNavSocialIcon href="/" socialMedia="youtube" />
          <ListNavSocialIcon href="/" socialMedia="twitter" />
        </ul>
      </FootColumn>
    </FooterContainer>
  );
}

export default Footer;
