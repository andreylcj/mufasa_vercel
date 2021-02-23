import React, { useState, useContext, useEffect } from 'react';
import Cookie from 'js-cookie';
import { useRouter } from 'next/router';
import validRegister from '../../assets/utils/ValidateData/ValidRegister';
import { postData } from '../../assets/utils/fetchData';
import { DataContext } from '../../store/GlobalState';
import InputField from '../../snnipets/InputField';

function FormLogin({
  children, isRegister, autofocus, idAndName,
}) {
  const [state, dispatch] = useContext(DataContext);
  const { userData, auth } = state;

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

    dispatch({
      type: 'UPDATE_USER_DATA',
      payload: { [name]: value },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isRegister) {
      router.push('/carteira?opcao=rentabilidade&periodo=no-mes');
      return;
    }

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
  const { query } = router;

  useEffect(() => {
    setSubmitStatus({
      emailMessage: '',
      passwordMessage: '',
      emailAlreadyExist: '',
    });
  }, [query]);

  useEffect(() => {
  // if (Object.keys(auth).length !== 0) router.push('/inicio');
  }, [auth]);

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      style={{
        marginTop: '40px',
      }}
    >
      <InputField
        autofocus={autofocus}
        submitMessage={submitStatus.emailMessage}
        userDataInfo={userData.email}
        onChange={handleInputChange}
        onBlur={handleOnBlurChange}
        email={email}
        initialMessage="E-mail principal"
        type="email"
        value={userData.email}
        idAndName={`email__${idAndName}`}
      />
      <InputField
        submitMessage={submitStatus.passwordMessage}
        userDataInfo={userData.password}
        onChange={handleInputChange}
        onBlur={handleOnBlurChange}
        email={password}
        initialMessage="Senha"
        type="password"
        value={userData.password}
        idAndName={`password__${idAndName}`}
      />
      {children}
    </form>
  );
}

export default FormLogin;
