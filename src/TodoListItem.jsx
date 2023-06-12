import { useRef, useState } from "react";
import { useTodoDispatch } from "./TodoContenxt";

function TodoListItem({itemData}){
    const dispatch = useTodoDispatch() ;
    const [isUpdate, setIsUpdate] = useState(false) ;
    const inputUpdate = useRef() ;
    return(
      <ul className='todoListItem'>
        <li className='item-checkbox'>
          {!isUpdate ? <>
            <input type='checkbox' onClick={() => dispatch({type: "check", id:itemData.id})} name='item-checkbox' value={itemData.isChecked}/>
            {itemData.message}
          </> : <>
          <input type="text" ref={inputUpdate}/>
          </> }
          
        </li>
        <li className='item-delete'>
            {!isUpdate ? <>
              <button onClick={() => dispatch({type: "remove", id:itemData.id})}>remove</button>
              <button onClick={ () => setIsUpdate(true)}>update</button>
            </>: <>
            <button onClick={() => {
              dispatch({type: "update", id: itemData.id, message: inputUpdate.current.value});
              setIsUpdate(false)
            }}>Confirm</button>
            <button onClick={() => setIsUpdate(false)}>cancel</button>
            </>}
            
        </li>  
      </ul>
    );
}
export default TodoListItem; 