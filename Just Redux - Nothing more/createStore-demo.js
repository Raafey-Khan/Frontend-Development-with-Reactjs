import {createStore} from 'redux'


function demoReducer(state, action){
    if(action.type == 'add_item'){
        return [...state, {name: action.itemName, quantity: action.itemQuantity}]
    }
    return state;
}

// These are Actions Creators reducing wet coding
const add_item = (name, quantity) => ({
    type: 'add_item',
    itemName: name,
    itemQuantity: (quantity) ? quantity : 1
})

const initialState = [{name: 'apple'}, {name: 'rice'}]

const store = createStore(demoReducer, initialState);

console.log(store.getState());

store.dispatch(add_item('Banana'))

console.log(store.getState());

store.dispatch(add_item('Mango'));

console.log(store.getState());
