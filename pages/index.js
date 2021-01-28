import React, { useContext } from 'react';
import Link from 'next/link';
import Cookie from 'js-cookie';
import { DataContext } from '../store/GlobalState';
import { ACTION } from '../store/Actions';

function Home() {
  const [state, dispatch] = useContext(DataContext);
  const { auth } = state;

  const handleLogout = () => {
    Cookie.remove('refreshToken', { path: '/api/auth/accessToken' });
    localStorage.removeItem('firstLogin');
    dispatch({
      type: ACTION.AUTH,
      payload: {},
    });
  };

  const loggedRouter = () => {
    const email = auth.user ? auth.user.email : '';
    const role = auth.user ? auth.user.role : '';
    return (
      <>
        <div className="m-1 d-flex flex-column align-items-center">
          <p>
            Bem vindo,
            {email}
          </p>
          <p>
            Você é um
            {role}
          </p>
          <Link href="/CEI">
            <a>CEI</a>
          </Link>
          {
                        auth.user && auth.user.admin
                          ? (
                            <>

                              <Link href="/bend-admin/home">
                                <a>Área de administrador</a>
                              </Link>
                            </>
                          ) : (
                            <Link href="/profile/home">
                              <a>Área do Usuário</a>
                            </Link>
                          )
                    }
          <button
            type="submit"
            onClick={handleLogout}
            className="my-2"
          >
            Logout
          </button>
        </div>
      </>
    );
  };

  return (
    <div className="d-flex flex-column">
      <p>HOME</p>

      {
                Object.keys(auth).length === 0
                  ? (
                    <>
                      <Link href="/entrar"><a>Entrar</a></Link>
                      <Link href="/registrar"><a>Registrar</a></Link>
                    </>
                  ) : (
                    loggedRouter()
                  )
            }

    </div>

  );
}

export default Home;
