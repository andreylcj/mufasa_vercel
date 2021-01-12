import React, { useContext } from 'react';
import Link from 'next/link';
import { DataContext } from '../store/GlobalState';
import Cookie from 'js-cookie'
import ACTION from '../store/Actions';

function Home() {

    const [state, dispatch] = useContext(DataContext);
    const { auth } = state

    const handleLogout = () => {
        Cookie.remove('refreshToken', { path: '/api/auth/token' })
        localStorage.removeItem('firstLogin')
        dispatch({
            type: ACTION.AUTH,
            payload: {},
        })
    }

    const loggedRouter = () => {
        return (
            <div className="m-1">
                <p>LOGADO</p>
                <button onClick={handleLogout}>Logout</button>
            </div>
        )
    }

    return (
        <div className="d-flex flex-column">
            <p>HOME</p>


            {
                Object.keys(auth).length === 0 ?
                    (
                        <>
                            <Link href="/entrar"><a>Entrar</a></Link>
                            <Link href="/registrar"><a>Registrar</a></Link>
                        </>
                    ) : (
                        loggedRouter()
                    )
            }

        </div>

    )
}

export default Home
