import React from 'react'
import { apiUserLogin } from "../../api/services";
const LoginPage = () => {
    return (
        <div>
            <button onClick={() => apiUserLogin()}>login</button>
        </div>
    )
}

export default LoginPage
