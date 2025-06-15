
import { useReducer } from 'react'
import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'

import TodoContext from './components/context/TodoContext'
import TodoReducer from './reducers/TodoReducer'

function App() {

  
  const [todos, dispatch] = useReducer(TodoReducer, [])
  // the todos here is the state variable
  // and the other is dispatch


  // what is dispatch
  // dispatch is the fuction we use in order to trigger an action 
  // and we know action are task

  

 

  return (
    <>
    <TodoContext.Provider value={{todos, dispatch}}>
      {/* in order to trigger an action we have
      to call the  dispatch method takes only one argument that is 
      plain action javascript object 

      that means you have to pass the typeproperty and payload property
      
      */}






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
