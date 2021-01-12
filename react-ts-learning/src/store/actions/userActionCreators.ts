import store from '..'
import { UserActionTypes } from "./actionTypes";

const createUserLogin = ()=>({type:UserActionTypes.USERLOGININ})
const createUserLogout = ()=>({type:UserActionTypes.USERLOGININ})

export{
    createUserLogin,
    createUserLogout
}