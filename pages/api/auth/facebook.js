import React, { useState, useContext, useEffect} from 'react';
import FacebookLogin from 'react-facebook-login';


import Cookie from 'js-cookie';
import { useRouter } from 'next/router';
import { postData, getData } from '../../../assets/utils/fetchData';
import { DataContext } from '../../../store/GlobalState';
import { ACTION } from '../../../store/Actions';

export default function Facebook() {
  const [state, dispatch] = useContext(DataContext);

  const { userData } = state;
  const { auth } = state;

  const [isLoggedin, setisLoggedin] = useState(false);

  const [submitStatus, setSubmitStatus] = useState({
    emailMessage: '',
    nameMessage: '',
    emailNotExist: '',
  });

  const componentClicked = ()=> {
    console.log("funcionou");
  }


  const { email } = userData;

  const responseFacebook = async (e) => {
    // console.log(response);
    console.log("funcionou");
    
    const emailMessage = userData.email;

    setSubmitStatus({
      emailMessage,
    });

    if (emailMessage) {
      return;
    }

    const res = await postData('api/auth/login', userData);
    setSubmitStatus({
      emailNotExist: res.emailMessage,

    });
    setisLoggedin({
      isLoggedin: true,
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

    const new_auth = await getData('api/auth/accessToken');

    dispatch({
      type: ACTION.AUTH,
      payload: {
        token: new_auth.accessToken,
        user: new_auth.user,
      },
    });
  };

  const router = useRouter();

  useEffect(() => {
    dispatch({
      type: ACTION.UPDATE_USER_DATA,
      payload: {
        email: '',
      },
    });
  }, []);

  useEffect(() => {
    if (Object.keys(auth).length !== 0) router.push('/');
  }, [auth]);

  let fbContent;
  if (isLoggedin) {
    fbContent = (
      <div style={{
        width: '400px',
        margin: 'auto',
        backgroud: 'grey',
        padding: '20px',
      }}
      >
        <h2>
          {' '}
          Bem vindo
          {email}
        </h2>
      </div>
    );
  } else {
    fbContent = (
      <FacebookLogin
        appId="2790121004649262"
        autoLoad
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
      />
    );
  }
  return (
    <div>
      {fbContent}
    </div>
  );
}
