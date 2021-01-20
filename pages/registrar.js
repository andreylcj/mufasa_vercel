import React, { useState, useContext, useEffect } from 'react'
import validRegister from '../assets/utils/ValidRegister'
import Loading from '../snnipets/Loading'
import { postData } from '../assets/utils/fetchData';
import Link from 'next/link';
import ACTION from '../store/Actions';
import { DataContext } from '../store/GlobalState';
import { useRouter } from 'next/router'
import facebook from './api/auth/Facebook'
function Register() {

    const [state, dispatch] = useContext(DataContext);
    const { loading } = state
    const { userData } = state
    const { auth } = state

    const [submitStatus, setSubmitStatus] = useState({
        emailMessage: '',
        passwordMessage: '',
        emailAlreadyExist: '',
    })

    const { email, password } = userData

    const handleInputChange = e => {
        const { name, value } = e.target
        dispatch({
            type: ACTION.UPDATE_USER_DATA,
            payload: { [name]: value }
        });
    }

    const handleSubmit = async e => {
        e.preventDefault()

        const { emailMessage, passwordMessage } = validRegister(userData.email, userData.password)

        setSubmitStatus({
            emailMessage: emailMessage,
            passwordMessage: passwordMessage,
        })

        if (emailMessage || passwordMessage) {
            return
        }

        dispatch({ type: ACTION.START_LOADING, });
        const res = await postData('api/auth/register', userData);
        dispatch({ type: ACTION.END_LOADING, });

        setSubmitStatus({
            emailAlreadyExist: res.emailMessage,
        })

        if (res.emailMessage)
            return

        //set new auth
        const new_auth = await fetch('api/auth/accessToken', {
            method: 'GET',
        })
        const data = await new_auth.json()

        dispatch({
            type: ACTION.AUTH,
            payload: {
                token: data.accessToken,
                user: data.user
            }
        })

    }

    useEffect(() => {
        dispatch({
            type: ACTION.UPDATE_USER_DATA,
            payload: {
                email: '',
                password: '',
            }
        });
    }, [])

    const router = useRouter()

    useEffect(() => {
        if (Object.keys(auth).length !== 0) router.push('/')
    }, [auth])

    return (

        <div>

            <div><Link href="/"><a>HOME</a></Link></div>

            <form onSubmit={handleSubmit} noValidate className="mx-auto my-4"
                style={{ maxWidth: '500px' }}
            >
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">E-mail</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
                        name="email"
                        onChange={handleInputChange} value={email}
                    />
                    <div id="emailHelp" className={`form-text${submitStatus.emailMessage || submitStatus.emailAlreadyExist ? ' text-danger' : ''}`}>
                        {
                            submitStatus.emailMessage ?
                                (
                                    <p>{submitStatus.emailMessage}</p>
                                ) : submitStatus.emailAlreadyExist ?
                                    (
                                        <p>
                                            {submitStatus.emailAlreadyExist}.
                                        Deseja fazer <Link href="/entrar">
                                                <a
                                                    className="text-primary text-underline"
                                                    onClick={() => dispatch({ type: ACTION.UPDATE_USER_DATA, payload: { password: "" } })}
                                                >
                                                    login
                                                </a>
                                            </Link>?
                                        </p>
                                    ) : (
                                        'Nós nunca vamos compartilhar seu e-mail com ninguém.'
                                    )
                        }
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Senha</label>
                    <input type="password" className="form-control" id="password"
                        name="password"
                        onChange={handleInputChange} value={password} />
                    <div id="passwordHelp" className={`form-text${submitStatus.passwordMessage ? ' text-danger' : ''}`}>
                        {
                            submitStatus.passwordMessage ?
                                (
                                    <p>{submitStatus.passwordMessage}</p>
                                ) :
                                (
                                    ''
                                )
                        }
                    </div>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="checkMeOut" />
                    <label className="form-check-label" htmlFor="checkMeOut">Lembrar de mim</label>
                </div>
                <button type="submit" className="btn btn-primary d-flex mx-auto">
                    {
                        loading ?
                            (
                                <>
                                    <Loading />
                                </>
                            ) : (
                                'CADASTRAR'
                            )
                    }
                </button>
            </form>
            <facebook />
        </div >
    )
}

export default Register
