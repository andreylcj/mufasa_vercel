import React, { createContext, useEffect, useReducer } from 'react'
import reducers from './Reducers'
import ACTION from '../store/Actions'
import { getData } from '../assets/utils/fetchData'

export const DataContext = createContext();

export const initialState = {
    auth: {

    },
    loading: false,
    userData: {
        email: '',
        password: '',
    },
}

export const DataProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducers, initialState)

    useEffect(async () => {
        console.log('ok')
        const firstLogin = localStorage.getItem('firstLogin')
        if (firstLogin) {
            const res = await fetch('http://localhost:3000/api/auth/accessToken', {
                method: 'GET',
            })
            const data = await res.json()

            dispatch({
                type: ACTION.AUTH,
                payload: {
                    token: data.accessToken,
                    user: data.user
                }
            })
        }
    }, [])

    return (
        <DataContext.Provider value={[state, dispatch]}>
            {children}
        </DataContext.Provider>

    )
}