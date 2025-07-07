// CSS Imports
import './InputItem.css'

export default function InputItem() {
  return (

    <div className='item-input-wrapper'>
        <input 
        className='item-input'
        type="text" 
        placeholder='Add an Item'
        />
        <button className='add-item-button'>Add</button>

    </div>
  
  )
}
