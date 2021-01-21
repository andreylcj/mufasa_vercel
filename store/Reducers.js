import { ACTION } from './Actions'
import { initialState } from './GlobalState'

const reducers = (state, action) => {

    const draftState = Object.assign({}, state)

    switch (action.type) {

        // NOTIFY
        case ACTION.ADD_MODAL:
            return {
                ...draftState,
                modal: action.payload
            }

        // NOTIFY
        case ACTION.NOTIFY:
            return {
                ...draftState,
                notify: action.payload
            }

        // ADD USERS
        case ACTION.ADD_USERS:
            return {
                ...draftState,
                users: action.payload
            }

        // AUTH
        case ACTION.AUTH:
            return {
                ...draftState,
                auth: action.payload
            }

        // INITIAL STATE
        case ACTION.INITIAL_STATE:
            return initialState

        //loading Register And Login ========================================================================
        case ACTION.START_LOADING:
            return {
                ...draftState,
                loading: true
            }
        case ACTION.END_LOADING:
            return {
                ...draftState,
                loading: false,
            }

        //Update user data ========================================================================
        case ACTION.UPDATE_USER_DATA:
            return {
                ...draftState,
                userData: {
                    ...draftState.userData,
                    ...action.payload,
                }
            }

        default:
            return state
    }
}

export default reducers