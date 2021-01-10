import { COLLAPSED_ACTION_TYPE, MenuAction } from "./types";

function MenuReducer(action:MenuAction):boolean{
    const { type } = action;
    switch(type){
        case COLLAPSED_ACTION_TYPE.CLOSE_MENU:
            return false
        case COLLAPSED_ACTION_TYPE.OPEN_MENU:
            return true
        default:
            return true
    }
}
export{
    MenuReducer
}