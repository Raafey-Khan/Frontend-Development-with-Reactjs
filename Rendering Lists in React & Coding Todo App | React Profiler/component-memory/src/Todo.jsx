import { useState } from "react";
import TodoItem from "./TodoItem";
function Todo(props) { {/* parent component Todo */}
  
    //const todoItems = props.todoList.map((todo) => <TodoItem key={todo.id} todo={todo} />)

    const [todoItems, setTodoItems] = useState([{data: 'todo1', id: '123'}, {data: 'todo2', id: 213}])
    const [inputText, setInputText] = useState("");

    function delteTodo(id) {
        let reamainingTodos = todoItems.filter((todo) => todo.id !== id);
        setTodoItems(reamainingTodos);
    }

    function editTodo(id, newTodo) {
        let updatedTodos = todoItems.map((todo) => {
            if(todo.id == id) todo.data = newTodo;
            return todo
        })
        setTodoItems(updatedTodos)
    }

   console.log(todoItems);

  
    return (
    
    <>

    <input 
    type="text" 
    value={inputText} 
    onChange={(e) => {
        setInputText(e.target.value)

      
        
    }
    } 
    />

    <button id="add-todo-btn"
    onClick={() => {
       
        setTodoItems([...todoItems, {data: inputText, id: (new Date()).getTime()   }])
        setInputText("")
        
        
    }
        
        
    
}
  
    >Add Todo</button>

<button onClick={() => setTodoItems([])}>Delete all</button>
    

<ul> 
    {todoItems.map((todo) => <TodoItem 
    key={todo.id} 
    todo={todo}  
    delete={() => delteTodo(todo.id)}
    edit={(newTodo) => editTodo(todo.id, newTodo)}
    
    /> )}
    
    
    </ul>




    
    </> )
   
}



export default Todo;


// same components getting render everytime thats why
// react offers us to use keyprop
// to uniquely identify a component

// keyprop expects to be a string or a number

// that should be a uniquely identifier for your component


// between re render we can identify which compoenent is the old one and 
// which component is the new one