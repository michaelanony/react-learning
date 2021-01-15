export default function defReducer(state = {}, action: any) {

    return Object.assign({}, state, action)
}