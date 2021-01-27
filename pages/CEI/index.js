import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { DataContext } from '../../store/GlobalState';
import Loading from '../../snnipets/Loading';
import validCpfAuth from '../../assets/utils/ValidateData/ValidCpf';
import GoBackButton from '../../snnipets/GoBackButton';
import { putData } from '../../assets/utils/fetchData';

const CEI = styled.div`

`;

CEI.Header = styled.h1`

`;

CEI.Form = styled.form`

`;

function insertCEIinfo() {
  const [state, dispatch] = useContext(DataContext);
  const { loading, auth } = state;

  const [submitData, setSubmitData] = useState({
    cpf: '',
    password: '',
    user_id: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSubmitData({
      ...submitData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validData = await validCpfAuth(submitData.cpf, submitData.password);

    if (!validData.validate) {
      setSubmitData({
        ...submitData,
        cpfErr: validData.cpfMsg,
        passwordMsg: validData.passwordMsg,
      });
      console.log(validData);
      return;
    }

    setSubmitData({
      ...submitData,
      cpfErr: '',
      passwordMsg: '',
    });

    const CEIdata = {
      CPF: submitData.cpf.split('.').join('').split('-').join(''),
      CEIpassword: submitData.password,
      _id: submitData.user_id,
    };

    const CPF = CEIdata.CPF;
    const CEIpassword = CEIdata.CEIpassword;

    console.log(CEIdata);

    dispatch({ type: 'START_LOADING' });

    const updateInfor = async () => {
       
      dispatch({type: 'NOTIFY', payload: {loading: true}})

      

      putData('api/user/', CEIdata._id, {
          CPF , CEIpassword
      }, auth.token).then(res => {
          if(res.err) return dispatch({type: 'NOTIFY', payload: {error: res.err}})

          dispatch({type: 'AUTH', payload: {
              token: auth.token,
              user: res.user
          }})
          return dispatch({type: 'NOTIFY', payload: {success: res.msg}})
      })
  }




  updateInfor();

    dispatch({ type: 'END_LOADING' });
  };

  useEffect(() => {
    if (!auth.user) return;

    setSubmitData({
      ...submitData,
      user_id: auth.user._id,
    });
  }, [auth.user]);

  return (
    <>
      <GoBackButton />

      <CEI className="container">
        <CEI.Header>
          CEI INFO
        </CEI.Header>

        <CEI.Form
          onSubmit={handleSubmit}
          noValidate
          className="mx-auto my-4"
          style={{ maxWidth: '500px' }}
        >

          <div className="mb-3">
            <label htmlFor="cpf" className="form-label">Cpf</label>
            <input
              type="text"
              className="form-control"
              id="cpf"
              aria-describedby="emailHelp"
              name="cpf"
              onChange={handleInputChange}
              value={submitData.cpf}
            />
            <div id="cpfHelp" className={`form-text${submitData.cpfErr ? ' text-danger' : ''}`}>
              {
                                submitData.cpfErr
                                  ? (
                                    <p>{submitData.cpfErr}</p>
                                  ) : (
                                    null
                                  )
                            }
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Senha</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              onChange={handleInputChange}
              value={submitData.password}
            />
            <div id="passwordHelp" className={`form-text${submitData.passwordMsg ? ' text-danger' : ''}`}>
              {
                                submitData.passwordMsg
                                  ? (
                                    <p>{submitData.passwordMsg}</p>
                                  ) : (
                                    'Nós nunca vamos compartilhar seus dados com ninguém.'
                                  )
                            }
            </div>
          </div>
          {/*
                    <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="checkMeOut" />
                    <label className="form-check-label" htmlFor="checkMeOut">Lembrar de mim</label>
                </div>
                */}
          <button type="submit" className="btn btn-primary d-flex mx-auto">
            {
                            loading
                              ? (
                                <>
                                  <Loading />
                                </>
                              ) : (
                                'Salvar'
                              )
                        }
          </button>
        </CEI.Form>
      </CEI>
    </>
  );
}

export default insertCEIinfo;
