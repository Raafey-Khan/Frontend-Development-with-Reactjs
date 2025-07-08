import {v4 as uuidv4} from 'uuid';

function itemReducer(shoppingItems, action){ //action --> {type: 'add_item'}
    if(action.type == 'add_item'){

         return ([...shoppingItems, 
      {id: uuidv4(), name: action.itemName, quantity: 1}

    ]);

    } else if(action.type == 'increment_item'){

        const newShoppingItem = shoppingItems.map(item => {
      if (item.id == action.itemId) item.quantity++;
      return item;

    });
    return newShoppingItem

    } else if(action.type == 'decrement_item'){

     let newShoppingItems = shoppingItems.map(item => {
      if (item.id == action.itemId ) item.quantity--;
      return item;

    });
    return newShoppingItems.filter(item => item.quantity >= 0)
    }
}

/*
so actually useReducer is a hook of react
and it takes two arguments first is the state variable second is the dispatch method
or dispatch function that trigges on based on the type we passed in side it
and usereducer()<-- internally take the first argument as a function what we added in a file where all the logic is seggregate out
and second argument is [] <-- an empty array so based on it on the function file we will 
take two argement first is the state variable and second is the action method based on it dispatch will trigger
*/


export default itemReducer;