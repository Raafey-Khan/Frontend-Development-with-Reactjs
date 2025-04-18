import { useState } from "react";
import './TodoItem.css'

function TodoItem(props){
    const [isEditing, setIsEditing] = useState(false);
    const [todoData, setTodoData] = useState(props.todo.data);

  

 
    
    return (
        <div >

            

<li  >

    {
    (isEditing) ? 
    <input type="text" value={todoData} onChange={(e) => setTodoData(e.target.value)} /> : <span>{props.todo.data}</span> 
    
    }
        
     
    
    </li>

    <button  onClick={() => {
        props.delete();
        
        }
        
        }>   Done  </button>

        <button onClick={() => {
            setIsEditing(!isEditing);
            props.edit(todoData);
        }} >


            {(isEditing) ? 'Save': 'Edit'}
        </button>



        
        



    

       

      
        </div>

        
    )
}


export default TodoItem;