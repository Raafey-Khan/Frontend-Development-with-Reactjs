import { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";

function AddTodo() {

    const {todos, dispatch} =  useContext(TodoContext);
      

    const [todoText, setTodoText] = useState('');

    function addTodo(todoText) {
        let nextId = todos.length + 1;
           dispatch({type: 'add_todo', payload: {todoText}});
            setTodoText('')
    }

    return(
        <>
        <input type="text" placeholder="Add your next todo..." 
        onChange={(e) => setTodoText(e.target.value)}
        value={todoText}
       
        />
        <button  onClick={() => {
            addTodo(todoText)
          
            setTodoText('')
           
        }  }
         disabled={todoText.trim() === ""}
        
        >Submit</button>

        <button  onClick={() => setTodos([])}>Delete ALL Todo</button>
        </>
    )
}

export default AddTodo;