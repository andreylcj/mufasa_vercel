import React from 'react';
import FooterContainer from '../../components/Footer';
import ListNav from '../../snnipets/Footer/ListNav';
import ListNavSocialIcon from '../../snnipets/Footer/ListNavSocialIcon';

function Footer() {
  return (
    <FooterContainer>
      <FooterContainer.FootColumn>
        <FooterContainer.FootColumn.Title>Sobre Nós</FooterContainer.FootColumn.Title>
        <ul>
          <ListNav text="Nossa Empresa" href="/" />
          <ListNav text="Nosso Time" href="/" />
          <ListNav text="Trabalhe Conosco" href="/" />
          <ListNav text="Imprensa" href="/" />
          <ListNav text="Conteúdo" href="/" />
        </ul>
      </FooterContainer.FootColumn>

      <FooterContainer.FootColumn>
        <FooterContainer.FootColumn.Title>Suporte</FooterContainer.FootColumn.Title>
        <ul>
          <ListNav text="Dúvidas" href="/duvidas" />
          <ListNav text="Fale Conosco" href="/contato" />
        </ul>
      </FooterContainer.FootColumn>

      <FooterContainer.FootColumn>
        <FooterContainer.FootColumn.Title>Perguntas Frequentes</FooterContainer.FootColumn.Title>
        <ul>
          <ListNav text="Como Funciona?" href="/duvidas?pergunta=como-funciona#como-funciona" />
          <ListNav text="Como Começar?" href="/duvidas?pergunta=como-comecar#como-comecar" />
          <ListNav text="Como crio minha conta?" href="/duvidas?pergunta=como-criar-conta#como-criar-conta" />
          <ListNav text="Não tem nenhuma taxa?" href="/duvidas?pergunta=taxa#taxa" />
        </ul>
      </FooterContainer.FootColumn>

      <FooterContainer.FootColumn>
        <FooterContainer.FootColumn.Title style={{ marginBottom: '0' }}>Siga o Mufasa</FooterContainer.FootColumn.Title>
        <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
          <ListNavSocialIcon href="/" socialMedia="face" />
          <ListNavSocialIcon href="/" socialMedia="insta" />
          <ListNavSocialIcon href="/" socialMedia="youtube" />
          <ListNavSocialIcon href="/" socialMedia="twitter" />
        </ul>
      </FooterContainer.FootColumn>
    </FooterContainer>
  );
}

export default Footer;
