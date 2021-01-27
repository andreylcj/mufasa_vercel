import React, { useContext, useEffect, useState } from 'react'
import Head from 'next/head'
import { DataContext } from '../../../store/GlobalState'
import Link from 'next/link'
import BendFilterUsers from '../../../snnipets/BendFilterUsers'
import { getData } from '../../../assets/utils/fetchData'
import { useRouter } from 'next/router';
import GoBackButton from '../../../snnipets/GoBackButton'

function Users() {

    const router = useRouter()
    const query = router.query

    const role = query.role || 'all'
    const search = query.search || 'all'
    const sort = query.sort || ''

    const [state, dispatch] = useContext(DataContext)
    const { users, auth } = state

    const [usersFiltered, setUsersFiltered] = useState([])

    useEffect(async () => {
        if (!auth.token) return

        /*const res = await getData(
            `api/user?role=${role}&sort=${sort}&search=${search}`,
            auth.token
        )

        setUsersFiltered(res.users)*/

        setUsersFiltered(users)

        //}, [auth, router.query])
    }, [auth, users])

    // jQuery ==============
    useEffect(() => {
        if (!usersFiltered.length || !auth.user) return

        // jQuery ==============
        $('#usersTable').DataTable();

    }, [usersFiltered, auth])

    return (

        <div className="table-responsive">
            <Head>
                <title>Usuários</title>
            </Head>

            <GoBackButton url='/bend-admin/home' />

            {/*
                <div className="mb-4">
                    <BendFilterUsers state={state} />
              </div>
            */}

            <table className="w-100 table" id='usersTable'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Admin</th>
                        {
                            (auth.user && (auth.user.role === 'master admin')) ? (
                                <th>Action</th>
                            ) : (
                                    null
                                )
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        usersFiltered.map((user, index) => (
                            <tr key={user._id}>
                                <th>{index + 1}</th>
                                <th>{user._id}</th>
                                <th>{user.email}</th>
                                <th>
                                    {
                                        user.admin ?
                                            (
                                                (user.role === 'master admin') ?
                                                    (
                                                        <>
                                                            <i className="fas fa-check text-success"></i>
                                                            <font className="text-success"> Master Admin</font>
                                                        </>
                                                    ) : (
                                                        <i className="fas fa-check text-success"></i>
                                                    )
                                            ) : (
                                                <i className="fas fa-times text-danger"></i>
                                            )
                                    }
                                </th>
                                {
                                    (auth.user && (auth.user.role === 'master admin')) ?
                                        (
                                            (auth.user.email !== user.email) ? (
                                                <>
                                                    <th>
                                                        <Link href={`/bend-admin/users/edit-user/${user._id}`}>
                                                            <a><i className="fas fa-edit text-info mr-2" title="Edit"></i></a>
                                                        </Link>

                                                        <i className="fas fa-trash-alt text-danger ms-2"
                                                            title="Remove"
                                                            data-bs-toggle="modal" data-bs-target="#exampleModal"
                                                            style={{ cursor: 'pointer' }}
                                                            onClick={() => {
                                                                dispatch({
                                                                    type: 'ADD_MODAL',
                                                                    payload: {
                                                                        data: users,
                                                                        title: user.email,
                                                                        id: user._id,
                                                                        type: 'ADD_USERS'
                                                                    }
                                                                })
                                                            }}
                                                        ></i>
                                                    </th>
                                                </>
                                            ) : (
                                                    <th>
                                                        <Link href={`/bend-admin/myprofile`}>
                                                            <a><i className="fas fa-user text-dark mr-2" title="My Profile"></i></a>
                                                        </Link>
                                                    </th>
                                                )
                                        ) : (
                                            null
                                        )
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Users
