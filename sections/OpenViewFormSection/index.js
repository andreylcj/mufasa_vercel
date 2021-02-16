import React, { useContext } from 'react';
import styled from 'styled-components';
import Loading from '../../snnipets/Loading';
import { DataContext } from '../../store/GlobalState';
import SecurityEnvironment from '../../snnipets/SecurityEnvironment';
import FormLogin from '../../snnipets/FormLogin';

const OpenView = styled.div`
/*background-color: #C95206;
opacity: 0.85;*/
background-color: rgba(201, 82, 6, 0.85);
display: grid;
justify-items: stretch;
gap: 24px 16px;
padding: 48px 16px;
grid-template-columns: repeat(6, 1fr);
grid-template-rows: auto auto;

@media (min-width: 768px) {
  min-height: calc(100vh - 80px);
  gap: 48px 32px;
  padding: 80px 24px;
}

@media (min-width: 1024px){
  -webkit-box-align: center;
  align-items: center;
  row-gap: 0px;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr;
  padding-right: 8vw;
  padding-left: 8vw;
}
`;

const SideText = styled.div`
text-align: left;
color: #fff;
grid-column: 1 / span 6;
font-size: 25px;
padding: 5vw;

h3{
  font-weight: bold;
  margin-bottom: 25px;
  font-size: 35px
}
p{
  font-weight: medium;
}

@media (min-width: 1024px) {
  grid-column: 1 / span 5;
}
`;

const SubmitButton = styled.button` 
  border: 0;
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: #C95206;
  font-size: 17px;
  font-weight: semibold;
  transition: background 0.15s;
  border-radius: 4px;
  width: 100%;
  height: 50px;
  color: #fff;

  &:hover{
    background: #a2450a;
  }

`;

const FormContainer = styled.div`
text-align: center;
font-size: 18px;
background: #fff;
border-radius: 5px;
box-shadow: #2b1304 0px 16px 24px;
padding: 5vw;
justify-self: center;
grid-area: 2 / 1 / auto / span 6;

@media (min-width: 768px){
  grid-area: 2 / 2 / auto / span 4;
  min-width: 400px;
  padding: 40px;
}

@media (min-width: 1024px){
  align-self: auto;
  grid-area: 1 / 9 / auto / span 4;
}

h4{
  color:#883906; 
  font-weight: bold;
  font-size: 30px;
}
h6{
  color: #707070;
  font-size: 15px;
  font-weight: regular;
}

`;

function OpenViewFormSection() {
  const [state, dispatch] = useContext(DataContext);
  const { loading } = state;

  return (
    <OpenView>
      <SideText>
        <h3>
          #SOUMUFASA
        </h3>
        <p>
          Tenha acesso ao cálculo automático de seu Imposto de Renda na Bolsa e à geração e
          emissão da DARF.
        </p>
        <p>
          Investir nunca foi tão fácil!
        </p>
      </SideText>
      <FormContainer>
        <h4>
          Comece a calcular
        </h4>
        <h6>
          É online, rápido e 100% grátis
        </h6>
        <FormLogin
          isRegister
        >
          <SubmitButton type="submit">
            {
                      loading
                        ? (
                          <>
                            <Loading />
                          </>
                        ) : (
                          'Quero começar'
                        )
                  }
          </SubmitButton>
        </FormLogin>
        <SecurityEnvironment />
      </FormContainer>
    </OpenView>
  );
}

export default OpenViewFormSection;
