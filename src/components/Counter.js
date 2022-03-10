import React from 'react'
import { useSelector, useDispatch } from "react-redux"

import { ActionTypes } from "../redux/constants/Constants"

function Counter (){
    const { INCREMENT, DECREMENT } = ActionTypes;
    const dispatch = useDispatch();
    const selector = useSelector((state)=> state.Reducers.value)
    // console.log(selector);
    return(
        <div>
            <h1>Redux Counter</h1>
            <button onClick={()=>{
                dispatch({type : DECREMENT})
            }}>decrement</button>
            <span style={{padding : "20px"}}> {selector} </span>
            <button onClick={()=>{
                dispatch({type : INCREMENT})
            }}>increment</button>
        </div>
    )
}

export default Counter;