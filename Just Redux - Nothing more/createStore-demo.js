import {createStore, bindActionCreators} from 'redux'
//                    bind our action creators to use this instead of store.dispatch()

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

store.subscribe(() => console.log("State might change"))


const actions = bindActionCreators({add_item}, store.dispatch)
                        //    bind action <-- store dispacth tells

console.log(actions);
console.log(store.getState());

actions.add_item('Banana')

console.log(store.getState());

actions.add_item('Mango', 3)

console.log(store.getState());

// store.dispatch({type: 'unknown'}); // still subscribe called if the dispatch called