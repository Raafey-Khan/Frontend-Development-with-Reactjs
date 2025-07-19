import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addTodo} from '../../actions/index'

function TodoInput(){
    const [todoText, setTodoText] = useState('');
    const dispacth = useDispatch();
    const todoList = useSelector((state) => state.todos)
  

    function insertTodo() {
        const lastTodoId = (todoList.length == 0) ? 0 : todoList[todoList.length - 1].id
        dispacth(addTodo({title: todoText, id: lastTodoId+1}));
        setTodoText('')
    }

    return(
        <>
          <input 
          type="text" 
          value={todoText}
          placeholder="Add Todo"
          onChange={(e) => setTodoText(e.target.value)}
          
          />
          <button onClick={insertTodo} >Add Todo</button>
        </>
    )
}

export default TodoInput;