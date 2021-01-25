import React, { useContext, useEffect } from 'react';
import Link from 'next/link';
import { DataContext } from '../../../store/GlobalState';
import Cookie from 'js-cookie'
import { ACTION } from '../../../store/Actions';
import { useRouter } from 'next/router'

function Home() {

    const [state, dispatch] = useContext(DataContext);
    const { auth } = state

    const handleLogout = () => {
        Cookie.remove('refreshToken', { path: '/api/auth/accessToken' })
        localStorage.removeItem('firstLogin')
        dispatch({
            type: ACTION.AUTH,
            payload: {},
        })
    }

    const loggedRouter = () => {
        return (
            <div className="mx-auto my-4">
                <p>Bem vindo, {auth.user.email}</p>
                <button onClick={handleLogout}>Logout</button>
            </div>
        )
    }

    const router = useRouter()

    useEffect(() => {
        if (Object.keys(auth).length === 0) {
            router.push('/bend-admin/')
        } else if (Object.keys(auth).length !== 0 && !auth.user.admin) {
            router.push('/bend-admin/denied-access')
        }

    }, [auth])

    return (
        <div className="d-flex flex-column">
            <p className="mx-auto my-4">ADMIN HOME</p>
            <Link href="/bend-admin/my-profile"><a className="mx-auto my-3">Meu Perfil</a></Link>
            <Link href="/bend-admin/users"><a className="mx-auto my-3">Users</a></Link>

            {
                Object.keys(auth).length === 0 ?
                    (
                        ''
                    ) : (
                        loggedRouter()
                    )
            }

        </div>

    )
}

export default Home
