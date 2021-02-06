import React, {useContext, useEffect } from 'react';
import FacebookLogin from 'react-facebook-login';
import { useRouter } from 'next/router';
import Cookie from 'js-cookie';
import { postData } from '../../../assets/utils/fetchData';
import { ACTION } from '../../../store/Actions';
import { DataContext } from '../../../store/GlobalState';

export default function Facebooke() {
  const componentClicked = () => {
    console.log('funcionou');
  };

  const [state, dispatch] = useContext(DataContext);
  const { auth } = state;

  const responseFacebook = async (response) => {
    console.log(response);

    const userData = {
      email: response.email,
    };
    console.log(userData);

    const res = await postData('api/auth/login', userData);
    if (res.emailMessage) {
      return;
    }

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
      type: ACTION.AUTH,
      payload: {
        token: data.accessToken,
        user: data.user,
      },
    });
  };
  const router = useRouter();

  useEffect(() => {
    if (Object.keys(auth).length !== 0) router.push('/');
  }, [auth]);

  return (
    <div>
      <FacebookLogin
        appId="2790121004649262"
        // autoLoad
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
      />
    </div>
  );
}
