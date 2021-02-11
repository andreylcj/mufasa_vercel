import React, { useState, useContext, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Cookie from 'js-cookie';
import { useRouter } from 'next/router';
import validRegister from '../../assets/utils/ValidateData/ValidRegister';
import Loading from '../../snnipets/Loading';
import { postData } from '../../assets/utils/fetchData';
import { DataContext } from '../../store/GlobalState';

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

const FormBox = styled.div`
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
.security{
  color: #CDD1DC;
  display:inline-flex;
  font-size:12px;
  align-items: center;
  margin-top: 25px;
  font-weight: bold;

  .security-icon{
    margin-right: 7px;
  }
}

form{
  margin-top: 40px;

  input{

    display: block;
    width: 100%;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;

    padding: 18px 24px;
    
    &:focus {
      color: #212529;
      background-color: #fff;
      border-color: #C95206;
      outline: 0;
      box-shadow: 0;
    }
      
  }

  .border-sucessful{
    border-color: #C95206 !important;
  }

  label{
    width: 100%;
    position: relative;
    color: #8E8E8E;
    border-color: #8E8E8E;

    &:focus-within{
      .input-placeholder{
        font-size: 10px;
        top: 0;
        color: #C95206;
      }
    }

    .input-placeholder{
      position: absolute;
      top: 50%;
      left: 24px;
      transform: translateY(-50%);
      font-size: 15px;
      transition: all 0.15s;
      background-color: #fff;
      padding: 0 5px;

      &:hover{
        cursor: text;
      }
    }
  }

  .inserted-info{
    font-size: 10px !important;
    top: 0 !important;
    color: #C95206;
  }

  button{
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
  }
}
`;

function OpenViewFormSection() {
  const [state, dispatch] = useContext(DataContext);
  const { loading } = state;
  const { userData } = state;
  const { auth } = state;

  const [submitStatus, setSubmitStatus] = useState({
    emailMessage: '',
    passwordMessage: '',
    emailAlreadyExist: '',
  });

  const { email, password } = userData;

  const handleOnBlurChange = (e) => {
    const { name, value } = e.target;

    const validEmail = name === 'email' ? value : userData.email;
    const validPassword = name === 'password' ? value : userData.password;

    const validResponse = validRegister(
      validEmail,
      validPassword,
      name,
    );

    setSubmitStatus({
      ...submitStatus,
      ...validResponse,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    /*

    const validEmail = name === 'email' ? value : userData.email;
    const validPassword = name === 'password' ? value : userData.password;

    const validResponse = validRegister(
      validEmail,
      validPassword,
      name,
    );

    setSubmitStatus({
      ...submitStatus,
      ...validResponse,
    }); */

    dispatch({
      type: 'UPDATE_USER_DATA',
      payload: { [name]: value },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { emailMessage, passwordMessage } = validRegister(userData.email, userData.password, 'form');

    setSubmitStatus({
      emailMessage,
      passwordMessage,
    });

    if (emailMessage || passwordMessage) {
      return;
    }

    dispatch({ type: 'START_LOADING' });
    const res = await postData('api/auth/register', userData);
    dispatch({ type: 'END_LOADING' });

    setSubmitStatus({
      emailAlreadyExist: res.emailMessage,
    });

    if (res.emailMessage) return;

    Cookie.set('refreshToken', res.refreshToken, {
      path: '/api/auth/accessToken',
      expires: 25,
    });
    localStorage.setItem('firstLogin', true);

    // set new auth
    const new_auth = await fetch('api/auth/accessToken', {
      method: 'GET',
    });
    const data = await new_auth.json();

    dispatch({
      type: 'AUTH',
      payload: {
        token: data.accessToken,
        user: data.user,
      },
    });
  };

  useEffect(() => {
    dispatch({
      type: 'UPDATE_USER_DATA',
      payload: {
        email: '',
        password: '',
      },
    });
  }, []);

  const router = useRouter();

  useEffect(() => {
  // if (Object.keys(auth).length !== 0) router.push('/inicio');
  }, [auth]);

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
      <FormBox>
        <h4>
          Comece a calcular
        </h4>
        <h6>
          É online, rápido e 100% grátis
        </h6>
        <form
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              <input
                type="email"
                className={`${submitStatus.emailMessage ? 'border-danger' : ''}
                ${!submitStatus.emailMessage && userData.email ? ' border-sucessful' : ''}`}
                id="email"
                aria-describedby="emailHelp"
                name="email"
                onChange={handleInputChange}
                value={email}
                // onFocus={() => console.log('onFocus')}
                onBlur={handleOnBlurChange}
              />
              <InputPlaceHolder
                text={submitStatus.emailMessage ? submitStatus.emailMessage : 'E-mail principal'}
                insertInfo={!!userData.email}
                wrongInfo={submitStatus.emailMessage}
              />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              <input
                type="password"
                className={`${submitStatus.passwordMessage ? ' border-danger' : ''} 
                ${!submitStatus.passwordMessage && userData.password ? ' border-sucessful' : ''}`}
                id="password"
                name="password"
                onChange={handleInputChange}
                value={password}
                onBlur={handleOnBlurChange}
              />
              <InputPlaceHolder
                text={submitStatus.passwordMessage ? submitStatus.passwordMessage : 'Senha'}
                insertInfo={!!userData.password}
                wrongInfo={submitStatus.passwordMessage}
              />
            </label>
          </div>
          {/*
                  <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="checkMeOut" />
                  <label className="form-check-label" htmlFor="checkMeOut">Lembrar de mim</label>
              </div>
              */}
          <button type="submit">
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
          </button>
        </form>
        <div className="security">
          <div className="security-icon">
            <img src="/images/security_icons/lp_world_security.svg" alt="Ambiente seguro" />
          </div>
          <div className="security-text">
            Ambiente seguro
          </div>
        </div>
      </FormBox>
    </OpenView>
  );
}

function InputPlaceHolder({ text, insertInfo, wrongInfo }) {
  return (
    <span className={`input-placeholder ${insertInfo ? 'inserted-info' : ''} ${wrongInfo ? 'text-danger' : ''}`}>
      {text}
    </span>
  );
}

export default OpenViewFormSection;
