import { all } from "redux-saga/effects"
import { loginSaga } from "./loginSaga"
import { sagaLearning } from "./sagaLearning"


export function* defSaga() {
    yield all([loginSaga(), sagaLearning()])
}