import { useContext } from "react";
import Todo from "../Todo/Todo";
import TodoContext from "../context/TodoContext";
function TodoList() {

    const {todos, setTodos} = useContext(TodoContext);
    // internal accessible to context component
    // we use useContext with sort of function and variables we need
    // and we can access it and use it

    function onDeleteTodo(id){
        const newTodoList = todos.filter(todo => todo.id !== id);
        setTodos(newTodoList);
    }

    function onEditTodo(id, newTodo) {
        const newTodoList = todos.map(todo => {
            if(todo.id == id) {
                todo.text = newTodo
            }
            return todo;
        });
        setTodos(newTodoList)
    }

    function onFinishTodo(id, state){
         const newTodoList = todos.map(todo => {
            if(todo.id == id) {
                todo.isFinished = state;
            }
            return todo;
        });
        setTodos(newTodoList)
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