// CSS Imports
import './InputItem.css';

import 'react-toastify/dist/ReactToastify.css';

// utils import
import {showSucess} from '../../utils/showToasts';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

export default function InputItem({addItem}) {

  const [itemName, setItemName] = useState('');

  console.log(uuidv4());
  // everything when uuidv4 called you get a new id
  
  return (

    <div className='item-input-wrapper'>
        <input 
        className='item-input'
        type="text" 
        placeholder='Add an Item'
        onChange={(e) => setItemName(e.target.value)}
        value={itemName}
        />
        
        <button className='add-item-button'
        onClick={() => {  
          addItem(itemName)
          setItemName('')
          showSucess('Successfully added item') 
        }}
        >
          Add</button>

    </div>
  
  )
}
