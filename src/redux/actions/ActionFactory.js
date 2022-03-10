import { ActionTypes } from "../constants/Constants";

export const increment = () =>{
    return {
        type : ActionTypes.INCREMENT
    }
}

export const decrement = () =>{
    return{
        type : ActionTypes.decrement
    }
}

