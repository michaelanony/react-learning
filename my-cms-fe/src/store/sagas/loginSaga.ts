import axios from "../../api/myAxios"
import { call, select, put, takeEvery } from "redux-saga/effects"
import { UserActionTypes } from "../actions/actionTypes"
export function* loginSaga() {
    console.log("loginSaga")
    yield takeEvery(UserActionTypes.USERLOGININ, function* () {
        console.log(UserActionTypes.USERLOGININ)
        const userInfo = yield select(state => state.userReducer.payload)
        console.log(userInfo)
        const res = yield call(axios.post, "http://127.0.0.1:4000/v1/user/login", { ...userInfo })
        console.log(res.data)
        if (res.data.code === 200) {
            localStorage.setItem('isLogin', 'true')
            yield put({
                type: UserActionTypes.USERLOGINSUCCESS,
                payload: {
                    userName: res.data.user
                }
            })
        } else {
            yield put({
                type: UserActionTypes.USERLOGINFAILED,
            })
        }
    })
}