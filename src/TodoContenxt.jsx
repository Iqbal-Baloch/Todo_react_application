import React, { useContext, useReducer } from "react";

const TodoContenxt = React.createContext() ;
const useTodoData = () => {
    return useContext(TodoContenxt);
}

const TodoDispatchContext = React.createContext();
const useTodoDispatch = () =>{
    return useContext(TodoDispatchContext);
}

const ACTION = {ADD: "add", REMOVE: "remove", UPDATE: "update", CHECK: "check"} ;

const reducer = (state, action)=>{
    console.log(state) ;
    let newState ;
    switch(action.type){
        case ACTION.ADD:
            let ide = state[state.length - 1]?.id ;
            if(ide) ide += 1 ;
            else ide = 1 ;
            newState = [...state, {id: ide, message: action.message, isChecked: false}]; 
            break ;
        case ACTION.REMOVE:
            newState = state.filter((item) => {
                if(item.id == action.id) return false ;
                return true ;
            })
            break ;
        case ACTION.UPDATE:
            newState = state.map((item) => {
                if(item.id == action.id) return {...item, message: action.message} ;
                return item ;
            })
            break ;
        case ACTION.CHECK:
            newState = state.map((item) => {
                if(item.id == action.id) return {...item, isChecked: !item.isChecked} ;
                return item ;
            })
            break ;
        default:
            break ;
    }
    return newState ;
}
function TodoContenxtProvider({children}){
    const [state, dispatch] = useReducer(reducer, []) ;
    return(
        <TodoContenxt.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                {children}
            </TodoDispatchContext.Provider >
        </TodoContenxt.Provider>
    );
}

export {TodoContenxtProvider, useTodoData, useTodoDispatch} ;