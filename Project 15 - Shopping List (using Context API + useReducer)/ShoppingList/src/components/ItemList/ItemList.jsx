// Css imports
import './ItemList.css';
// Components import
import Item from '../Item/Item';
 function ItemList({shoppingItems}) {
  
  return (
    <div className="shopping-items-wrapper">
        { 
        // Saving the app from crashing by && operator
            shoppingItems && shoppingItems.map(item => {
                return(
                    <Item
                    itemName={item.name}
                    quantity={item.quantity}
                    key={item.id}
                    
                    />
                )
            })
        }
    </div>
  )
}
export default ItemList;