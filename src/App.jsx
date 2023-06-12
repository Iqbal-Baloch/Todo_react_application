import './App.css'
import TodoList from './TodoList';
function App() {
 
const handleAddTodo = (e)=> {
  e.preventDefault() ;
}
  return (
   <div className='App'>
    <h1>Todo Application</h1>
    <div className='todoApp'>
      <form onSubmit={handleAddTodo}>
        <input type='submit' value="Add"/>
        <input type='text' required/>
      </form>
      <TodoList/>
    </div>
   </div>
  ); 
}


export default App
