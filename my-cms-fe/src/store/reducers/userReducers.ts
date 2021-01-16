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


export default function userReducer(state = initialState, action: UserAction): UserState {
    console.log(action)
    switch (action.type) {
        case UserActionTypes.USERLOGINWITHSSO:
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
                userName:"",
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