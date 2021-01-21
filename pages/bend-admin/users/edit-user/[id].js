import React, { useContext, useState, useEffect } from 'react'
import { DataContext } from '../../../../store/GlobalState'
import { useRouter } from 'next/router'
import { patchData } from '../../../../assets/utils/fetchData'
import Loading from '../../../../snnipets/Loading'
import { updateItem } from '../../../../store/Actions'

function EditUser() {

    const allRoles = ['user', 'admin', 'master admin']

    const router = useRouter()
    const { id } = router.query

    const [state, dispatch] = useContext(DataContext)
    const { users, auth } = state
    const loading = state.loading

    const [editUser, setEditUser] = useState([])
    const [role, setRole] = useState('')

    useEffect(() => {
        users.forEach(user => {
            if (user._id === id) {
                setEditUser(user)
                setRole(user.role)
            }
        });
    }, [users])

    const handleUpdate = async () => {
        dispatch({ type: 'START_LOADING', });
        await patchData(`api/user/${editUser._id}`, { role }, auth.token)
            .then(res => {
                if (res.err) return dispatch({ type: 'NOTIFY', payload: { error: res.err } })

                var admin = false
                if (role === 'admin' || role === 'master admin') {
                    var admin = true
                }

                dispatch(updateItem(
                    users,
                    editUser._id,
                    { ...editUser, role, admin },
                    'ADD_USERS'
                ))
                return dispatch({ type: 'NOTIFY', payload: { success: res.msg } })
            });
        dispatch({ type: 'END_LOADING', });
    }

    useEffect(() => {
        if (Object.keys(auth).length !== 0 && !auth.user.admin) {
            router.push('/bend-admin/denied-access')
        } else if (Object.keys(auth).length !== 0 && auth.user.role !== 'master admin') {
            router.push('/bend-admin/home')
        }
    }, [auth])

    return (
        <div className='my-4'>
            <div>
                <button className="btn btn-dark" onClick={() => { router.back() }}>
                    <i className="fas fa-long-arrow-alt-left"></i> Voltar
            </button>
            </div>

            <div className="col-md-4 mx-auto my-4 w-100">
                <h2 className="text-secondary">Editar Usuário</h2>

                <div className="my-2">
                    <label htmlFor="email" className="me-2">Email</label>
                    <input type="text" id="email" defaultValue={editUser.email} disabled />
                </div>

                <div className="my-2">
                    <label className="me-2">Role</label>
                    <select
                        id="role"
                        onChange={(e) => { setRole(e.target.value) }}
                        className="text-capitalize"
                        value={role}
                    >
                        {
                            allRoles.map((role, index) => {
                                return (
                                    < option
                                        key={index}
                                        value={role}
                                        className="text-capitalize"
                                    >
                                        {role}
                                    </option>
                                )
                            })
                        }

                    </select>
                </div>

                <button className="btn btn-dark"
                    onClick={handleUpdate}
                >
                    {
                        loading ?
                            (
                                <>
                                    <Loading />
                                </>
                            ) : (
                                'Update'
                            )
                    }
                </button>
            </div>

        </div >
    )
}

export default EditUser
