import React, { useState, useContext, useEffect } from 'react';
import Link from 'next/link';
import Cookie from 'js-cookie';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { DataContext } from '../../store/GlobalState';
import { ACTION } from '../../store/Actions';
import Loading from '../../snnipets/Loading';
import validLogin from '../../assets/utils/ValidateData/ValidLogin';
import { getData, postData } from '../../assets/utils/fetchData';
import Facebooke from '../api/auth/facebooklogin';
import GoogleLog from '../api/auth/Googlelogin';
import FormLogin from '../../snnipets/FormLogin';
import SecurityEnvironment from '../../snnipets/SecurityEnvironment';

const SubmitButton = styled.button` 
  border: 1px solid ${({ theme }) => theme.colors.mufasaOrange};
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  font-size: 17px;
  font-weight: semibold;
  transition: all 0.15s;
  border-radius: 4px;
  width: 100%;
  height: 50px;
  color: ${({ theme }) => theme.colors.mufasaOrange};

  &:hover{
    background: ${({ theme }) => theme.colors.mufasaOrange};
    color: #fff;
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
max-width: 350px;
margin: auto;

@media (min-width: 768px){
  min-width: 400px;
  padding: 40px;
  max-width: 450px;
}


h4{
  color:#333; 
  font-weight: regular;
  font-size: 1.5rem;
}

`;

const Scene = styled.div`
  max-width: 350px;
  perspective: 1400px;
  margin: 8vh auto;
  height:600px;

  .is-flipped{
    transform: rotateY(180deg);
  }

  @media (min-width: 768px){
    min-width: 400px;
    max-width: 450px;
    height:600px;
  }
`;

const Card = styled.div`

  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  position: relative;

  .card__face{
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .card__face--back{
    transform: rotateY(180deg);
  }

`;

function Login() {
  const [state, dispatch] = useContext(DataContext);
  const { loading, auth } = state;

  const [register, setRegister] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    /* const { emailMessage, passwordMessage } = validLogin(userData.email, userData.password);

    setSubmitStatus({
      emailMessage,
      passwordMessage,
    });

    if (emailMessage || passwordMessage) {
      return;
    }

    dispatch({ type: ACTION.START_LOADING });
    const res = await postData('api/auth/login', userData);
    dispatch({ type: ACTION.END_LOADING });

    setSubmitStatus({
      emailNotExist: res.emailMessage,
      wrongPassword: res.passwordMessage,
    });

    if (res.emailMessage || res.passwordMessage) {
      return;
    }

    if (res.err) {
      return;
    }

    Cookie.set('refreshToken', res.refreshToken, {
      path: '/api/auth/accessToken',
      expires: 25,
    });
    localStorage.setItem('firstLogin', true);

    // set new auth
    const new_auth = await getData('api/auth/accessToken');

    dispatch({
      type: ACTION.AUTH,
      payload: {
        token: new_auth.accessToken,
        user: new_auth.user,
      },
    }); */
  };

  useEffect(() => {
    dispatch({
      type: ACTION.UPDATE_USER_DATA,
      payload: {
        email: '',
        password: '',
      },
    });
  }, []);

  const router = useRouter();
  const { pathname, query } = router;

  useEffect(() => {
    if (query['criar-conta'] === '') {
      setRegister(true);
    } else {
      setRegister(false);
    }
  }, [query]);

  useEffect(() => {
    // if (Object.keys(auth).length !== 0) router.push('/inicio');
  }, [auth]);

  return (
    <Scene>
      <Card className={register ? 'is-flipped' : ''}>
        {/*
      !register ? ( */}

        <FormContainer className="card__face card__face--front">
          <h4>
            Faça seu login
          </h4>
          <FormLogin
            autofocus
          >
            <SubmitButton type="submit">
              {
                      loading
                        ? (
                          <>
                            <Loading />
                          </>
                        ) : (
                          'Continuar'
                        )
                  }
            </SubmitButton>
          </FormLogin>
          <GoogleLog />
          <Facebooke />
          <BottomText>
            <Link href="#">
              <a>
                Esqueci minha senha
                <i
                  className="fas fa-chevron-right"
                />
              </a>
            </Link>
            <Link href="?criar-conta">
              <a>
                Ainda não sou cliente
                <i
                  className="fas fa-chevron-right"
                />
              </a>
            </Link>

          </BottomText>
          <SecurityEnvironment />
        </FormContainer>

        <FormContainer className="card__face card__face--back">
          <h4>
            Crie sua conta
          </h4>
          <FormLogin
            autofocus
          >
            <SubmitButton type="submit">
              {
                      loading
                        ? (
                          <>
                            <Loading />
                          </>
                        ) : (
                          'Cadastrar'
                        )
                  }
            </SubmitButton>
          </FormLogin>
          <GoogleLog />
          <Facebooke />
          <BottomText>
            <Link href="">
              <a>
                Já tenho uma conta
                <i
                  className="fas fa-chevron-right"
                />
              </a>
            </Link>

          </BottomText>
          <SecurityEnvironment />
        </FormContainer>
      </Card>
    </Scene>
  );
}

const BottomText = styled.div`
  margin-top: 25px;

  a{
    &:nth-child(1){
    margin-bottom: 5px;
    }
    text-decoration: none;
    margin: 0;
    font-size: 1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.mufasaOrange};
    font-weight: 500;
    transition: all 0.15s;

    &:hover{
      color: ${({ theme }) => theme.colors.veryDarkMufasaOrange};
    }

    i{
      margin-left: 10px;
      font-size: 0.75rem;
    }
  }
`;

export default Login;
