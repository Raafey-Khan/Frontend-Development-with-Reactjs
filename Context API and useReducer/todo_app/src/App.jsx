
import { useEffect, useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'

import TodoContext from './components/context/TodoContext'

function App() {

  const [todos, setTodos] = useState([

  ])




 

  return (
    <>
    <TodoContext.Provider value={{todos, setTodos}}>
      {/* that means now todos and setTodos you dont need to pass
      them manully in each components 

      TodoContext.Provider takes ==> a value and inside it takes objects that are 
      variables or functions that you want to access in internal component
      
      */}
    <AddTodo   />
    <TodoList   /> 
    {/* now inside all of the components will have the access to the TodoContext document */}
      </TodoContext.Provider> 
  
    </>
  )
}

export default App
