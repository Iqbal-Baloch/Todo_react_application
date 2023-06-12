import './App.css'

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
      <div className='todoList'>
          <ul className='todoListItem'>
            <li className='item-checkbox'>
              <input type='checkbox' name='item-checkbox'/>
              todo message here we goes....
            </li>
            <li className='item-delete'>
            <button>dellete</button>
            <button>update</button>
            </li>  
          </ul>
      </div>
    </div>
   </div>
  ); 
}

export default App
