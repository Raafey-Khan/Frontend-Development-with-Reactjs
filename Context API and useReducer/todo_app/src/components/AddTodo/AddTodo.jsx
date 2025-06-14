import { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";

function AddTodo() {

    const {todos, setTodos} =  useContext(TodoContext);
      

    const [todoText, setTodoText] = useState('');

    return(
        <>
        <input type="text" placeholder="Add your next todo..." 
        onChange={(e) => setTodoText(e.target.value)}
        value={todoText}
       
        />
        <button  onClick={() => {
           let nextId = todos.length + 1;
           setTodos([...todos, {id: nextId, text: todoText, isFinished: false}])
            setTodoText('')
           
        }  }
         disabled={todoText.trim() === ""}
        
        >Submit</button>

        <button  onClick={() => setTodos([])}>Delete ALL Todo</button>
        </>
    )
}

export default AddTodo;