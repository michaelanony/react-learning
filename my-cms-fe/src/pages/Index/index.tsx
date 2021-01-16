import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { createUserClean } from "../../store/actions/userAcitonCreators";
const IndexPage = () => {
    const dispatch = useDispatch()
    const state = useSelector((state:any) => state.userReducer)
    const logout=()=>{
        dispatch(createUserClean())
    }
    console.log('inde')
    return (
        <div>
            <Link to="/saga">asfasf</Link>
            <div>now:{state.userName}</div>
            <button onClick={logout}>logout</button>
        </div>
    )
}

export default IndexPage
