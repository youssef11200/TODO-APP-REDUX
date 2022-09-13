import { ADDTODO } from "./actiontypes";
const initialState={
    todolist=[
        
    ]
}
    const todolistreducer=(state=initialState,{type,payload}) =>{
switch (key) {
    case ADDTODO:
        return {...state,todolist:[...state.todolist,{...payload,id: Math.random(),}
        }
        
       

    default:
       state
}
    }

