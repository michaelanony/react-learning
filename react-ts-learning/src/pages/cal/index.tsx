import React, { useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store'
import { createIncrementAction, createDecrementAction, createAsyncIncrementAction } from "../../store/actions/countActionCreators";
const CalPage = () => {
    const { count } = useSelector((state: AppState) => {
        return {
            count: state.countReducer.count
        };
    })
    const dispatch = useDispatch()
    const inputRef = useRef<HTMLSelectElement>(null);
    const increment = useCallback(
        () =>
            dispatch(
                createIncrementAction(Number(inputRef.current?.value))
            ),
        [dispatch]
    )
    const decrement = useCallback(
        () =>
            dispatch(
                createDecrementAction(Number(inputRef.current?.value))
            ),
        [dispatch]
    )

    const asyncincrement = useCallback(
        () =>
            dispatch(
                createAsyncIncrementAction(Number(inputRef.current?.value), 500)
            ),
        [dispatch]
    )
    return (
        <div>
            <h1>now count:{count}</h1>
            <select ref={inputRef}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
            </select>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button>当前求和为奇数再加</button>
            <button onClick={asyncincrement}>异步加</button>
        </div>
    )
}
export default CalPage;