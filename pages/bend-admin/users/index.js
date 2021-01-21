import React, { useContext, useEffect } from 'react'
import Head from 'next/head'
import { DataContext } from '../../../store/GlobalState'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { deleteItem } from '../../../store/Actions'
import { deleteData } from '../../../assets/utils/fetchData'

function Users() {

    const [state, dispatch] = useContext(DataContext)
    const { users, auth } = state

    const router = useRouter()

    useEffect(() => {
        if (Object.keys(auth).length !== 0 && !auth.user.admin) {
            router.push('/bend-admin/denied-access')
        }

    }, [auth])

    return (
        <div className="table-responsive">
            <Head><title>Users</title></Head>

            <div className="mb-4">
                <button className="btn btn-dark" onClick={() => { router.back() }}>
                    <i className="fas fa-long-arrow-alt-left"></i> Voltar
            </button>
            </div>

            <table className="w-100 table">
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
                        users.map((user, index) => (
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
