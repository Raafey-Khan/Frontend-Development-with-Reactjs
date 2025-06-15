import { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";

function AddTodo() {

    const {dispatch} =  useContext(TodoContext);
      

    const [todoText, setTodoText] = useState('');

    function addTodo(todoText) {
        dispatch({type: 'add_todo', payload: {todoText}})
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