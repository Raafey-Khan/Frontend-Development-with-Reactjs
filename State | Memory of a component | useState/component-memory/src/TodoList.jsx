import { useState } from "react";


function TodoList({todos, deleteCurrentTodo}) { // todos --> [{}, {}]
    console.log(todos);
    const [isEditing, setIsEditing] = useState(false);
    const [todoText, setTodoText] = useState('')

return (
    <>
    
        {todos.map((todo, index) => 
        
        <li key={index}>  
        {isEditing ? <input type="text" onChange={(e) => setTodoText(e.target.value) } /> : {todo} }
        
        <button onClick={() => {
            setIsEditing(!isEditing);

        }}>{isEditing ? 'Save' : 'Edit'}</button> 
        
        <button onClick={() => deleteCurrentTodo(index)}>Delete</button>
        
        
        </li> )
        
        }
    
    

    </>
)



}


export default TodoList;