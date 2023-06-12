import { useRef } from 'react';
import './App.css'
import { useTodoDispatch } from './TodoContenxt';
import TodoList from './TodoList';
function App() {
  const dispatch = useTodoDispatch() ;
  const message = useRef() ;
  const handleAddTodo = (e)=> {
    e.preventDefault() ;
    dispatch({type: "add", message: message.current.value}) ;
  }
  return (
   <div className='App'>
    <h1>Todo Application</h1>
      <div className='todoApp'>
        <form onSubmit={handleAddTodo}>
          <input type='submit' value="Add"/>
          <input type='text' ref={message} required/>
        </form>
        <TodoList/>
      </div>
   </div>
  ); 
}


export default App
