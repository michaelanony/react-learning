import {takeEvery,takeLatest,throttle} from "redux-saga/effects"
import axios from 'axios'
export function* defsage(){
    yield takeEvery('takeEvery',function*(){
        console.log('takeEvery')
    })
    yield takeLatest('takeLatest',function*(){
        console.log('takeLatest')
    })
    yield throttle(0,'throttle',function*(){
        console.log('throttle')
    })
}