import axios from "axios"
import { call, put, select, take, takeEvery, takeLatest, throttle } from "redux-saga/effects"
import { UserActionTypes } from "../actions/actionTypes"
export function* sagaLearning() {
    yield takeEvery('takeEvery', function* () {
        //takeEvery出发了多少次 执行多少次异步任务
        //获取state数据
        const user = yield select(state => state.defReducer.payload)
        const res = yield call(axios.post, "http://127.0.0.1:4000/v1/user/login", { ...user })
        console.log('takeEvery', res)
        //put用来发送action
        yield put({
            type: UserActionTypes.USERLOGOUT,
            payload: {
                userName: res.data.user
            }
        })
    })
    yield takeLatest('takeLatest', function* () {
        //takeLatest只会执行最新的一次，自动取消之前已经启动但仍在执行中的saga任务
        //获取state数据
        const user = yield select(state => state.defReducer.payload)
        const res = yield call(axios.post, "http://127.0.0.1:4000/v1/user/login", { ...user })
        console.log('takeLatest', res)
    })
    let count: number = 0
    yield throttle(2000, 'throttle', function* () {
        //节流阀，匹配到对应的一个action后会执行一个异步任务，但同时会接受对应action
        //的异步任务，放在底层buffer中，那么在第一个参数ms毫秒内将不会执行异步任务了

        //获取state数据
        count++
        const user = yield select(state => state.defReducer.payload)
        const res = yield call(axios.post, "http://127.0.0.1:4000/v1/user/login?" + count, { ...user })
        console.log('throttle', res)
    })


    while (true) {
        //匹配到指定的action，进行阻塞执行下列函数
        yield take('take')
        console.log("匹配到了take")
    }

}