// Css imports
import './ItemList.css';
// Components import
import Item from '../Item/Item';
import React from 'react';
import {memo} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";


// utils
import { showError } from '../../utils/showToasts';

 function ItemList({shoppingItems, addQuantity, deleteQuantity}) {

 
  
  return (
    <div className="shopping-items-wrapper">
        { 
        // Saving the app from crashing by && operator
            shoppingItems && shoppingItems.map(item => {
                return(
                   <div key={item.id} className='items-list'>
                    <div className='change-quantity add-item'
                    onClick={() => addQuantity(item.id)}
                    >
                        
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                    <Item
                    itemName={item.name}
                    quantity={item.quantity}
                   
                    
                    />
                    <div className='change-quantity remove-item'
                    onClick={() => {
                        if(item.quantity == 0) showError(`${item.name} removed from the list`)
                        deleteQuantity(item.id);
                    }}
                    >
                         <FontAwesomeIcon icon={faMinus} />
                    </div>
                   </div>
                   
                )
            })
        }
    </div>
  )
}
export default React.memo(ItemList);