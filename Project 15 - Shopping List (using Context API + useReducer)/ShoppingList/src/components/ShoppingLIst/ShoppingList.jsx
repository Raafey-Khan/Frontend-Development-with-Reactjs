// CSS Imports
import './ShoppingList.css'

// Components imports
import Header from "../Header/Header";
import InputItem from "../InputItem/InputItem";

export default function ShoppingList() {
  return (
    <>

       <Header/>
    <div className="current-shopping-list">
        <InputItem/>
    </div>
    
    </>

  )
}
