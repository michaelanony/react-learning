import React from 'react'
import { useDispatch } from "react-redux";
const SagaLearning = () => {
    const dispatch = useDispatch()

    const sendtakeEvery=()=>{
        dispatch({
            type:"takeEvery",
            payload:{
                user
            }
        })
    }
    const sendtakeLatest=()=>{
        dispatch({
            type:"takeLatest",
            payload:{
                userName:"213"
            }
        })
    }
    const sendThrottle=()=>{
        dispatch({
            type:"throttle",
            payload:{
                userName:"213"
            }
        })
    }
    return (
        <div>
            <button onClick={sendtakeEvery}>send takeEvery</button>
            <button onClick={sendtakeLatest}>send takeLatest</button>
            <button onClick={sendThrottle}>send Throttle</button>
        </div>
    )
}

export default SagaLearning
