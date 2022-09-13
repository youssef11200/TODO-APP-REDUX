import { ADDTODO } from "./actiontypes"
export const addtodo = (id) => {
    return{
        type:ADDTODO,
        payload:id
    }
 }