import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { DataContext } from '../../store/GlobalState';
import Loading from '../../snnipets/Loading';
import validCpfAuth from '../../assets/utils/ValidateData/ValidCpf';
import GoBackButton from '../../snnipets/GoBackButton';
import { getData, patchData } from '../../assets/utils/fetchData';
import UpdateButton from '../../snnipets/UpdateButton';

const CEI = styled.div`

`;

CEI.Header = styled.h1`

`;

CEI.Form = styled.form`

`;

function insertCEIinfo() {
  const [state, dispatch] = useContext(DataContext);
  const { loading, auth } = state;
  const [initialLoading, setInitialLoading] = useState(true);

  const id = auth.user && auth.user._id;

  const [submitData, setSubmitData] = useState({
    cpf: '',
    password: '',
    // user_id: '',
  });

  const [dbData, setDbData] = useState({
    cpf: '',
    password: '',
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
      // _id: submitData.user_id,
    };

    const { CPF, CEIpassword } = CEIdata;

    dispatch({ type: 'START_LOADING' });

    await patchData('api/user', { CPF, CEIpassword }, auth.token)
      .then((res) => {
        if (res.err) {
          console.log(res.err);
          return;
        }

        setDbData({
          cpf: res.user.CPF,
          password: res.user.CEIpassword,
        });

        console.log(res);
      });

    dispatch({ type: 'END_LOADING' });
  };

  useEffect(async () => {
    if (!id || !auth.token) return;

    const res = await getData(`api/user/${id}`, auth.token);

    if (res.err) {
      console.log(res.err);
      return;
    }

    setDbData({
      cpf: res.data.CPF,
      password: res.data.CEIpassword,
    });

    setInitialLoading(false);
  }, [id, auth]);

  return (
    <>
      <GoBackButton />

      <CEI className="container">
        <CEI.Header>
          CEI INFO
        </CEI.Header>

        {
          initialLoading ? (
            <Loading />
          ) : (
            dbData.cpf ? (
              <>
                <div className="my-2">
                  <label htmlFor="cpf" className="me-2">CPF</label>
                  <input type="text" id="cpf" defaultValue={dbData.cpf} disabled />
                </div>
                <div className="my-2">
                  <label htmlFor="password" className="me-2">Senha do CEI</label>
                  <input type="text" id="password" defaultValue={dbData.password} disabled />
                </div>
              </>
            ) : (
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
                <UpdateButton
                  loading={loading}
                  textContent="Salvar"
                />
              </CEI.Form>
            )
          )
          }
      </CEI>
    </>
  );
}

export default insertCEIinfo;
