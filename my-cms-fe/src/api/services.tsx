import axios from "./myAxios";
import { UserResp } from "../types/index"

const REACT_APP_API_HOST = "http://127.0.0.1:4000"
export const apiCheckLogin = async (token:string): Promise<UserResp> => {
    return axios({
        url: REACT_APP_API_HOST + `/v1/user/check?token=`+token,
        method: "GET",
    }).then(res => {
        return res.data
    })
}
export const apiUserLogin = async (user: string, pwd: string): Promise<UserResp> => {
    return axios({
        url: REACT_APP_API_HOST + `/v1/user/login`,
        method: "POST",
        data: {
            user: user,
            pwd: pwd,
        },
    }).then(res => {
        return res.data
    })
}