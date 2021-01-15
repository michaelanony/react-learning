import React, { FC, ReactElement } from 'react'
import { NavLink } from "react-router-dom";
interface IProps{
    activeClassName: string | null
    toLink:string
    content:string
}
const MyNavLink:FC<IProps> = ({
    activeClassName,toLink,content
}):ReactElement => {
    return (
    <NavLink activeClassName={activeClassName?activeClassName:""} to={toLink}>{content}</NavLink>
    )
}

export default MyNavLink
