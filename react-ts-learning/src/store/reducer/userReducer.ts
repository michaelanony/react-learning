import { UserActionTypes } from "../actions/actionTypes";

interface State{
    isLogin:boolean
}
const initialState: State = {
    isLogin: false,
};
interface UserAction{
    type:string
    payload:boolean
}

export default ( state = initialState,action:UserAction):State => {
    switch(action.type){
        case UserActionTypes.USERLOGININ:
            return {
                isLogin: true
            }
    
        case UserActionTypes.USERLOGOUT:
            return {
                isLogin: false
            }
        default:
            return state
    }
}