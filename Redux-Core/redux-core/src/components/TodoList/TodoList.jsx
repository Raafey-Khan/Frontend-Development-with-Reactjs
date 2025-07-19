import {useSelector} from 'react-redux'
// use selector gets a callback and access all the store
// it used to read data from the Redux store.
import Todo from '../todo/todo';
import TodoInput from '../TodoInput/TodoInput';

function TodoList() {
    const todoList = useSelector((state) => state.todos );

  return (
    <>
    <TodoInput/>
    {
    todoList && todoList.map((todo) => <Todo title={todo.title} id={todo.id} key={todo.id} />)
}
    </>
  )
}


export default TodoList; 