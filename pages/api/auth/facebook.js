import React, { useState, useContext, useEffect } from 'react';
import FacebookLogin from 'react-facebook-login';

import Cookie from 'js-cookie';
import { postData, getData } from '../../../assets/utils/fetchData';

export default function Facebook() {
  const componentClicked = () => {
    console.log('funcionou');
  };

  const responseFacebook = async (response) => {
    console.log(response);

    const userData = response.email;
    const res = await postData('api/auth/login', userData);

    if (res.emailMessage) {
      console.log(res.emailMessage);
      return;
    }

    Cookie.set('refreshToken', res.refreshToken, {
      path: '/api/auth/accessToken',
      expires: 25,
    });
    localStorage.setItem('firstLogin', true);
  };

  /* const responseFacebook = async (e) => {
    // console.log(response);
    console.log("funcionou");

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
  }; */

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
