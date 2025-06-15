import {useState} from 'react'
 import TodoList from './TodoList';

function Todo() {
  

    const [todos, setTodos] = useState([]);

    const [newTodo, setNewTodo] = useState("");

   


 function deleteCurrentTodo(mainidx) {
   const filteredTodo = todos.filter((_, index)=> index !== mainidx);
   setTodos(filteredTodo);
 }
    
    return(
        <div id='hello'>
        

       <input type="text" placeholder='new Todo..'  value={newTodo}
            onChange={(event)=> setNewTodo(event.target.value)}
       />
       <br />
       <button onClick={()=> { 
        setNewTodo('')
        setTodos([...todos, newTodo])
        }}>Add todo</button>
       <TodoList todos={todos} deleteCurrentTodo={deleteCurrentTodo} /> 

       <button onClick={() => setTodos([])}>delete</button>
         
          
        </div>
    )
}

export default Todo;

