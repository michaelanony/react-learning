import { call, select, put, takeEvery } from "redux-saga/effects"
import { UserActionTypes } from "../actions/actionTypes"
import { apiCheckLogin } from "../../api/services";
import { UserResp } from "../../types/index"
export function* loginSaga() {
    yield takeEvery(UserActionTypes.USERLOGINWITHSSO, function* () {
        const token = yield select(state => state.userReducer.payload.token)
        console.log(1223)
        const res:UserResp =  yield call(apiCheckLogin,token)
        if (res.code === 200) {
            yield put({
                type: UserActionTypes.USERLOGINSUCCESS,
                payload: {
                    userName: res.data?.user
                }
            })
        } else {
            localStorage.removeItem('ac-token')
            window.location.href="/login"
        }
    })
    yield takeEvery(UserActionTypes.USERCLEAN, function* () {
        localStorage.removeItem('ac-token')
        yield put({
            type:UserActionTypes.USERLOGOUT
        })
    })
}