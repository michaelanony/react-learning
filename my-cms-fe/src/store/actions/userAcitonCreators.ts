import store from '..'
import { UserActionTypes } from "./actionTypes";
import { apiCheckLogin } from "../../api/services"


const createUserLoginWithSSO = (token:string) => ({
    type: UserActionTypes.USERLOGINWITHSSO, payload: {
        token
    }
})
const createUserLogin=(user:string)=>({
    type:UserActionTypes.USERLOGINSUCCESS,
    payload:{
        userName:user
    }
})
const createUserClean = () => ({ type: UserActionTypes.USERCLEAN })
// const createCheckUserLogin = (): UserState => {
//     apiCheckLogin().then(res => {
//         if (res.code == 200) {
//             return {
//                 userName: res.data?.user,
//                 isLogin: true
//             }
//         } else {
//             return {
//                 userName: "",
//                 isLogin: false
//             }
//         }
//     })
// }
export {
    createUserLoginWithSSO,
    createUserLogin,
    createUserClean,
    // createCheckUserLogin
}