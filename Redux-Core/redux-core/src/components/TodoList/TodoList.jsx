import {useSelector} from 'react-redux'
import Todo from '../todo/todo';

function TodoList() {
    const todoList = useSelector((state) => state.todos );

  return (
    todoList && todoList.map((todo) => <Todo title={todo.title} key={todo.id} />)
  )
}


export default TodoList; 