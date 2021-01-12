import store from "..";
import { CountActionTypes } from "./actionTypes";
//同步action就是指aciton值为Object类型的一般对象
const createIncrementAction = (data: number) =>({type:CountActionTypes.INCREMENT,data})
const createDecrementAction = (data: number) =>({type:CountActionTypes.DECREMENT,data})
//异步action就是指action值为函数
const createAsyncIncrementAction =(data:number,time:number)=>{
    return()=>{
        setTimeout(()=>{
        store.dispatch(createIncrementAction(data))
        },time)
    }
}
export {
    createIncrementAction,
    createDecrementAction,
    createAsyncIncrementAction
}