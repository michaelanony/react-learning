export interface UserResp {
    code: 200 | 403
    msg: string,
    data: { user: string } | null
}
