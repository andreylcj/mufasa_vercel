import React from 'react';
import styled from 'styled-components';

function Contato() {
  return (
    <SupportContainer>
      <Title>
        Como podemos ajudar?
      </Title>
      <FormContainer>
        <FormContainer.Bg>
          <FormContainer.ImgContain>
            <img src="/images/icons/sendEmail.png" alt="E-mail" />
          </FormContainer.ImgContain>
          <FormContainer.Form>
            <span>
              Entre em contato
            </span>
            <FormContainer.InputContain>
              <input className="beautyInput" type="text" name="name" placeholder="Nome" />
            </FormContainer.InputContain>

            <FormContainer.InputContain>
              <input className="beautyInput" type="text" name="email" placeholder="E-mail" />
            </FormContainer.InputContain>

            <FormContainer.InputContain>
              <input className="beautyInput" type="text" name="subject" placeholder="Assunto" />
            </FormContainer.InputContain>

            <FormContainer.InputContain>
              <textarea
                className="beautyInput"
                name="message"
                placeholder="Mensagem"
                style={{ marginTop: '0px', marginBottom: '0px', height: '150px' }}
              />
            </FormContainer.InputContain>
          </FormContainer.Form>
        </FormContainer.Bg>
      </FormContainer>
    </SupportContainer>
  );
}

const SupportContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.lightGrayBg}
`;

const Title = styled.div`
  padding: 8vh 10vw;
  background: linear-gradient(120deg, rgba(228,101,18,1) 0%, rgba(201,82,6,1) 52%, rgba(187,76,4,1) 100%);
  color: #fff;
  font-size: 2rem;
  font-weight: 400;
  width: 100%;
`;

const FormContainer = styled.div`
  padding: 10vh 5vw;
  max-width: 1160px;
  width: 100%;
`;

FormContainer.Bg = styled.div`
  background: #fff;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 600px;
  
  border-radius: 10px;
  overflow: hidden;
  padding: 10vh 5vw;
  box-shadow: 0 10px 20px rgb(0 0 0 / 20%);
`;

FormContainer.ImgContain = styled.div`
  width: 33.5%;
  will-change: transform;
  transform: perspective(300px) rotateX(0deg) rotateY(0deg);
  transition: all 0.2s;

  &:hover{
    transform: perspective(300px) rotate(20deg) scale(1.25);
  }
`;

FormContainer.Form = styled.form`
    width: 44%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  span{
    margin-bottom: 40px;
    font-size: 1.5rem;
    color: #333333;
    font-weight: 600;
  }
`;

FormContainer.InputContain = styled.div`
  position: relative;
  width: 100%;
  z-index: 1;
  margin-bottom: 20px;

  textarea.beautyInput{
    min-height: 150px;
    border-radius: 32px;
    padding: 12px 30px;
  }

  .beautyInput{
    display: block;
    width: 100%;
    background: #e6e6e6;
    font-size: 15px;
    line-height: 1.5;
    color: #666666;
    height: 50px;
    border-radius: 25px;
    padding: 0 30px;
    outline: none;
    border: none;
    font-weight: 700;
    transition: all 0.2s;
    border: 2px solid #e6e6e6;

    &:hover, &:focus{
      border: 2px solid #ec8d50;
    }
    &:focus{
      box-shadow: 0 0 4px 2px rgb(236 141 80 / 80%);
    }
    
  }
`;

export default Contato;
