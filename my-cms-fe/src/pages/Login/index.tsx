import React, { RefObject, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { apiUserLogin } from "../../api/services";
import { createUserLogin } from "../../store/actions/userAcitonCreators"
const LoginPage = () => {
    const userName = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)
    const status = useSelector((state: any) => state.userReducer.status)
    console.log(status)
    const dispatch = useDispatch()
    const logNow = () => {
        let user = userName.current?.value
        let pwd = password.current?.value
        if (user && pwd) {
            dispatch(createUserLogin(user, pwd))
            return
        }
        console.log("no pwd")
    }
    const h = () => {
        if (status === 1) {
            return (<div>登入失败</div>)
        }
    }
    return (
        <div>
            <input type="text" ref={userName} placeholder="username" />
            <input type="text" ref={password} placeholder="password" />
            <button onClick={logNow}>login</button>
            {h()}
        </div>
    )
}

export default LoginPage
