import { UserActionTypes } from "../actions/actionTypes";

interface UserState {
    userName: string,
    isLogin: boolean,
    status: number
}
interface UserAction {
    type: string,
    payload: UserState
}
const initialState: UserState = {
    userName: "",
    isLogin: false,
    status: 0
}


export default (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.USERLOGININ:
            return Object.assign({}, state, action)
        case UserActionTypes.USERLOGINSUCCESS:
            return {
                status: 0,
                userName: action.payload.userName,
                isLogin: true
            }

        case UserActionTypes.USERLOGOUT:
            return {
                ...state,
                isLogin: false
            }
        case UserActionTypes.USERLOGINFAILED:
            return {
                ...state,
                status: 1
            }
        default:
            return state
    }
}