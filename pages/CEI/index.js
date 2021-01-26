import React, { useState, useContext, useEffect } from 'react'
import { DataContext } from '../../store/GlobalState';
import styled from 'styled-components'
import Loading from '../../snnipets/Loading';

const CEI = styled.div`

`;

CEI.Header = styled.h1`

`;

CEI.Form = styled.form`

`;


function insertCEIinfo() {

    const [state, dispatch] = useContext(DataContext);
    const { loading } = state

    const [submitData, setSubmitData] = useState({
        cpf: '',
        password: '',
    })

    const handleInputChange = e => {
        const { name, value } = e.target
        setSubmitData({
            ...submitData,
            [name]: value
        })
    }

    const handleSubmit = async e => {
        e.preventDefault()
    }

    return (
        <CEI className="container">
            <CEI.Header>
                CEI INFO
            </CEI.Header>

            <CEI.Form onSubmit={handleSubmit} noValidate className="mx-auto my-4"
                style={{ maxWidth: '500px' }}>

                <div className="mb-3">
                    <label htmlFor="cpf" className="form-label">Cpf</label>
                    <input type="text" className="form-control" id="cpf" aria-describedby="emailHelp"
                        name="cpf"
                        onChange={handleInputChange} value={submitData.cpf}
                    />
                    <div id="cpfHelp" className='form-text'>
                        {
                            ''
                        }
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Senha</label>
                    <input type="password" className="form-control" id="password"
                        name="password"
                        onChange={handleInputChange} value={submitData.password} />
                    <div id="passwordHelp" className='form-text'>
                        Nós nunca vamos compartilhar seus dados com ninguém.
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
                        loading ?
                            (
                                <>
                                    <Loading />
                                </>
                            ) : (
                                'Salvar'
                            )
                    }
                </button>
            </CEI.Form>
        </CEI >
    )
}

export default insertCEIinfo
