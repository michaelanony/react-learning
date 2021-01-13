import axios from "./myAxios";
import { UserResp } from "../types/index"

const REACT_APP_API_HOST = "http://127.0.0.1:4000"
export const apiCheckLogin = async (): Promise<UserResp> => {
    return axios({
        url: REACT_APP_API_HOST + `/v1/user/check`,
        method: "GET",
    }).then(res => {
        return res.data
    })
}
export const apiUserLogin = async (): Promise<UserResp> => {
    return axios({
        url: REACT_APP_API_HOST + `/v1/user/login`,
        method: "POST",
        data: {
            user: "test",
            pwd: "test",
        },
    }).then(res => {
        return res.data
    })
}