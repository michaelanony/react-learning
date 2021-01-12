import { CountActionTypes } from "../actions/actionTypes";
interface State{
    count:number
}
const initialState: State = {
    count: 0,
};
interface CountAction{
    type:string
    data:number
}
export default ( state = initialState,action:CountAction):State => {
    console.log(state.count)
    switch(action.type){
        case CountActionTypes.INCREMENT:
            return {
                count: action.data+state.count
            }
        case CountActionTypes.DECREMENT:
            return {
                count: state.count-action.data
            }
        default:
            return state
    }
}
