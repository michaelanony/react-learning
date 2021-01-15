import React from 'react'
import { useDispatch } from "react-redux";
const SagaLearning = () => {
    const dispatch = useDispatch()

    const sendtakeEvery = () => {
        dispatch({
            type: "takeEvery",
            payload: {
                user: "1",
                pwd: "1"
            }
        })
    }
    const sendtakeLatest = () => {
        dispatch({
            type: "takeLatest",
            payload: {
                userName: "213"
            }
        })
    }
    const sendThrottle = () => {
        dispatch({
            type: "throttle",
            payload: {
                userName: "213"
            }
        })
    }
    const sendTake = () => {
        dispatch({
            type: "take",
            payload: {
                userName: "213"
            }
        })
    }
    return (
        <div>
            <button onClick={sendtakeEvery}>send takeEvery</button>
            <button onClick={sendtakeLatest}>send takeLatest</button>
            <button onClick={sendThrottle}>send Throttle</button>
            <button onClick={sendTake}>send Take</button>
        </div>
    )
}

export default SagaLearning
