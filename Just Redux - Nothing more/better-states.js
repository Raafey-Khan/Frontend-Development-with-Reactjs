// try to keep state as flat as possible


// also if getting nested backend responses of json from apis
// in that case we try to write our own converters and clasess
// they going to convert the data in the state its simple for us
// to store in the state then making easty to perform further actions 

import {createStore, combineReducers} from 'redux'

const state = {
    
    users: [
        {
            id: 1,
            name: 'Sanket'
        },
        {
            id: 2,
            name: 'Sarthak'
        },

        {
            id: 3,
            name: 'JD'
        }
       
    ],
    todos:[
         {
            userId: 1, 
            todoId: 1, 
            name: 'complete deployment'
        
        }, 
         {
            userId: 1, 
            todoId: 2, 
            name: 'raise the bug'
        },

         {
            userId: 3, 
            todoId: 1, 
            name: 'plan the script'
        },
         {
            userId: 2,
            todoId: 1,
            name: 'complete pppt'},

         {
            userId: 2, 
            todoId: 2, 
            name: 'take interview'
        }

    ]
}

// function reducer(state, action){
//     if(action.type == 'EDIT_TODO') {
//         let todos = state.todos;
//         let newTodos = todos.map(todo => {
//             if(todo.todoId == action.todoId && todo.userId == action.userId){
//                 todo.name = action.name
//             };
//             return todo;
//         })
//         return {...state, todos: newTodos};
//     }
//     if(action.type == 'ADD_USER'){
//         let newUser = {id: action.userId, name: action.userName}
//         let newUsers = [...state.users, newUser];
//         return {...state, users: newUsers}

//     }
//     return state;
// }

const ADD_USER = 'ADD_USER';
const EDIT_TODO = 'EDIT_TODO';

function userReducer(users = state.users, action){
    if(action.type == ADD_USER ){
        let newUser = {id: action.userId, name: action.userName}
        let newUsers = [...users, newUser];
        return newUsers;

    }
    return users;
}


function todoReducer(todos = state.todos, action) {
    if(action.type == EDIT_TODO) {
        let newTodos = todos.map(todo => {
            if(todo.todoId == action.todoId && todo.userId == action.userId){
                todo.name = action.name
            };
            return todo;
        })
        return {...state, todos: newTodos};
    }
    return todos;
}

// use complex logic once
// use easy logic everywere


const combinedReducer = combineReducers({users: userReducer, todos: todoReducer});

const store = createStore(combinedReducer);
console.log(store.getState());

store.dispatch({type: 'ADD_USER', userId: 5, userName: 'sanket'});

console.log(store.getState());