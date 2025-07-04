import { useContext } from "react";
import Todo from "../Todo/Todo";
import TodoContext from "../context/TodoContext";
function TodoList() {

    const {todos, dispatch} = useContext(TodoContext);
    // internal accessible to context component
    // we use useContext with sort of function and variables we need
    // and we can access it and use it

    function onDeleteTodo(id){
       dispatch({type: 'delete_todo', payload: {id }})
    }

    function onEditTodo(id, newTodo) {
        dispatch({type: 'edit_todo', payload: {id, newTodo}})
    }

    function onFinishTodo(id, state){
         dispatch({type: 'finish_todo', payload: {id, state}})
    }

    return(
        todos && todos.map(
 (todo) => <Todo 
        key={todo.id} 
        text={todo.text} 
     
        isFinished={todo.isFinished} 
        editTodo={(newTodo) => onEditTodo(todo.id,newTodo )}
        deleteTodo={() => onDeleteTodo(todo.id)}
        finishTodo={(state) => onFinishTodo(todo.id, state)}
        
        />)
    )
} 


export default TodoList;