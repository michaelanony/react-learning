export enum COLLAPSED_ACTION_TYPE {
    OPEN_MENU="openMenu",
    CLOSE_MENU="closeMenu"
}
export interface MenuAction {
    type: COLLAPSED_ACTION_TYPE,
    payload: boolean
}
