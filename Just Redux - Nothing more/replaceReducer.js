// Replaces the reducer currently used by the store to calculate the state.

import { createStore } from "redux";

/*
It i an advanced API, You might need this if your app
implements code splitting, and you want to load some of the
reducers dynacmically. You might also need this if you implement
a hot reloading mechanism for Redux

*/

const reducer = (state, action) => {
    if(action.type == 'ADD_TODO'){
        const newState = {user: action.user, id: action.user.id};
        return {...state, newState}
    }
    return state;
}

const store = createStore(reducer, state)

store.replaceReducer(nextReducer);


// preloadedState  the initial state you may opitionally specify it
// to hydrate the state from the server in universal apps, or to restore a 
// previously serialized user session. If you produced reducer with combineReducers,
// this mus be a plain object with the same shape as the keys passed to it. Otherwise
// you are free to pass anything that your reducer understands



/*
enhancer 

the argument enhancer you can pass to createStore 
which is tecnically a functon

ok

now this is a store enhancer, 
enhance means you improve the functionalities from a regular thing

we can enhance the store with third-party capabilities such as middleware, time travel
, persistence, etc The only store enhancer that ships with Redux is

time travel : you executed 5 dispatch want to go to check 2nd so we can do that

applyMiddleware(); default middleware of Redux has is

*/