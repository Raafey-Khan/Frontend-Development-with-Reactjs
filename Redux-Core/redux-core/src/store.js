import {createStore, combineReducers} from 'redux';
import todoReducer from './reducers/todoReducer';
import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './slices/todoSlice';

const reduxDevToolEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// const store = createStore(combineReducers({todos: todoReducer }), {}, reduxDevToolEnhancer);

const store = configureStore({
    reducer: {
        todos: todoSlice.reducer,
     
    }
});

export default store;