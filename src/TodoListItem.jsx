function TodoListItem(){
    return(
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
    );
}
export default TodoListItem; 