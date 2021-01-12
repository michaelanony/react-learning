import React, { useRef } from 'react'
import { useSelector } from 'react-redux';

const Person = () => {
    const nameRef = useRef<HTMLInputElement>(null)
    const ageRef = useRef<HTMLInputElement>(null)
    const add = () => {
        console.log(nameRef.current?.value)
        console.log(ageRef.current?.value)
    }
    // const state = useSelector(state => state.state)
    return (
        <div>
            <h2>PERSON</h2>
            <input type="text" name="" id="" placeholder="name.." ref={nameRef} />
            <input type="text" name="" id="" placeholder="age..." ref={ageRef} />
            <button onClick={add}>add</button>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}
export default Person;