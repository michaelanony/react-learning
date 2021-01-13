import { UserActionTypes } from "../actions/actionTypes";

interface UserState {
    userName: string,
    isLogin: boolean
}
interface UserAction {
    type: string,
    payload: string
}
const initialState: UserState = {
    userName: "",
    isLogin: false
}


export default (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.USERLOGININ:
            return {
                userName: action.payload,
                isLogin: true
            }
        case UserActionTypes.USERLOGOUT:
            return {
                ...state,
                isLogin: false
            }
        default:
            return state
    }
}