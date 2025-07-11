// Css imports
import './ItemList.css';
// Components import
import Item from '../Item/Item';
import React, { useContext } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";


// Context imports

import {ShoppingItemsContext, ShoppingDispatchContext} from '../../providers/ShoppingContext'

// utils
import { showError } from '../../utils/showToasts';

 function ItemList() {
   
    const shoppingItems = useContext(ShoppingItemsContext)
    const dispach = useContext(ShoppingDispatchContext)

  return (
    <div className="shopping-items-wrapper">
        { 
        // Saving the app from crashing by && operator
            shoppingItems && shoppingItems.map(item => {
                return(
                   <div key={item.id} className='items-list'>
                    <div className='change-quantity add-item'
                    onClick={() => dispach({type: 'increment_item', itemId: item.id})}
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
                        dispach({type: 'decrement_item', itemId: item.id})
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