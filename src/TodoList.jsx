import { useTodoData } from "./TodoContenxt";
import TodoListItem from "./TodoListItem";
function TodoList(){
    const todoData = useTodoData() ;
    return(
        <div className='todoList'>
            {
                todoData.map((item)=>{
                    return <TodoListItem itemData = {item} key={item.id}/>
                })
            }
            
        </div>
    );
}
export default TodoList ;