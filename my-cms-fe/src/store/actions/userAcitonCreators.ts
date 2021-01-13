import store from '..'
import { UserActionTypes } from "./actionTypes";
import { apiCheckLogin } from "../../api/services"


const createUserLogin = (user: string) => ({ type: UserActionTypes.USERLOGININ, payload: user })
const createUserLogout = () => ({ type: UserActionTypes.USERLOGININ })
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
    createUserLogin,
    createUserLogout,
    // createCheckUserLogin
}