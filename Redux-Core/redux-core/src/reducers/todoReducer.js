import {ADD_TODO, EDIT_TODO, REMOVE_TODO} from '../constants/index'

const initialTodos = [
    {id: 1, title: 'todo 1'},
    {id: 2, title: 'todo 2'}
]

function todoReducer(todos = initialTodos, action){
    if(action.type === ADD_TODO){
        return [...todos, {id: action.payload.id, title: action.payload.title}]
    }
    if(action.type === REMOVE_TODO){
        return todos.filter(todo => todo.id !== action.payload);
    }
    if(action.type === EDIT_TODO){
        return todos.map(todo => {
            if(todo.id === action.payload.id){
                todo.title = action.payload.title;
            }
            return todo;
        })
    }
    return todos;
}

export default todoReducer;