import {useState} from 'react'
 import TodoList from './TodoList';

function Todo() {
  

    const [todos, setTodos] = useState([]);

    const [newTodo, setNewTodo] = useState("");



    
    return(
        <div id='hello'>
        

       <input type="text" placeholder='new Todo..' 
            onChange={(event)=> setNewTodo(event.target.value)}
       />
       <br />
       <button onClick={()=> setTodos([...todos, newTodo])}>Add todo</button>
       <TodoList todos={todos} /> 

       <button onClick={() => setTodos([])}>delete</button>
         
          
        </div>
    )
}

export default Todo;

