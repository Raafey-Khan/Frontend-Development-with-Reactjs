// CSS Imports
import './ShoppingList.css'

// Components imports
import Header from "../Header/Header";
import InputItem from "../InputItem/InputItem";
import ItemList from '../ItemList/ItemList';
import { ToastContainer } from 'react-toastify';
import { useState , useReducer } from 'react';
import {v4 as uuidv4} from 'uuid';

// reducer imports
import itemReducer from '../../reducers/itemReducer';

 function ShoppingList() {

  // const [shoppingItems, setShoppingItems] = useState([]);
  const [shoppingItems, dispatch] = useReducer(itemReducer, []);

  function handleAddItem(name){
    dispatch({
      type: 'add_item',
      itemName: name
    });
  } 

  function handleAddQuantity(id) {
    dispatch({
        type: 'increment_item',
        itemId: id
    })
  }


   function handleDeleteQuantity(id) {
    dispatch(
      {
        type: 'decrement_item',
        itemId: id
      }
    )
  }




 
  return (
    <>
       <Header/>
       <ToastContainer/>
    <div className="current-shopping-list">
        <InputItem
           addItem={handleAddItem}
        />
        <ItemList 
        shoppingItems={shoppingItems} 
        addQuantity={handleAddQuantity}
        deleteQuantity={handleDeleteQuantity}
        />
    </div>
    
    </>

  )
}
export default ShoppingList;