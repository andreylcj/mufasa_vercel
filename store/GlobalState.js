import React, { createContext, useEffect, useReducer } from 'react'
import reducers from './Reducers'
import { ACTION } from '../store/Actions'
import { getData } from '../assets/utils/fetchData'

export const DataContext = createContext();

export const initialState = {
    modal: {

    },
    auth: {

    },
    notify: {

    },
    loading: false,
    userData: {
        email: '',
        password: '',
    },
    users: [

    ],
}

export const DataProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducers, initialState)

    const { auth } = state

    // AUTH
    useEffect(async () => {
        const firstLogin = localStorage.getItem('firstLogin')
        if (firstLogin) {
            const res = await getData('api/auth/accessToken')

            dispatch({
                type: ACTION.AUTH,
                payload: {
                    token: res.accessToken,
                    user: res.user
                }
            })
        }
    }, [])

    // USERS
    useEffect(async () => {
        if (auth.token) {
            if (auth.user.role === 'admin' || auth.user.role === 'master admin') {
                getData('api/user', auth.token)
                    .then(res => {
                        if (res.err) return dispatch({ type: 'NOTIFY', payload: { error: res.err } })
                        dispatch({ type: 'ADD_USERS', payload: res.users })
                    })
            }
        } else {
            dispatch({ type: 'ADD_USERS', payload: [] })
        }
    }, [auth.token])


    return (
        <DataContext.Provider value={[state, dispatch]}>
            {children}
        </DataContext.Provider>

    )
}