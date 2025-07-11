// CSS Imports
import './InputItem.css';

import 'react-toastify/dist/ReactToastify.css';

// Context import
import {ShoppingDispatchContext} from '../../providers/ShoppingContext'

// utils import
import { showSucess} from '../../utils/showToasts';
import {useForm} from 'react-hook-form';
import { useContext } from 'react';

export default function InputItem() {


  const { register, handleSubmit, formState: { errors } } = useForm({mode: 'onChange'});

  const dispatch = useContext(ShoppingDispatchContext);


  const handleFormSubmission = (data) => {
    dispatch({
      type: 'add_item',
      itemName: data.item
    })
    showSucess('Successfully added item')
    
  }

  
  return (
    <div className='item-input-wrapper'>
      <form onSubmit={handleSubmit(handleFormSubmission)}>
           <input 
        className='item-input'
        type="text" 
        placeholder='Add an Item'
       
        name="item"
        {...register("item", {required: true, minLength: 3})}

        />
      
       
        <button type='submit' className='add-item-button'
       
        >
          Add</button>
      </form>
       <div>
          {errors.item && errors.item.type === 'required' && <p>Item is missing</p>}
          {errors.item && errors.item.type === 'minLength' && <p>item cannot be less than 3</p>}
        </div>
     
    </div>
  
  )
}


/*
the main agenda to use useReducers with context api is
like when using the useReducers somehow we need the dispatch function in other
components as well so passing it as a prop manually can be less managable in big applications

so using the context api avoids us prop drilling and yep we can make the dispach
method globally avaible for the components who wants it and yeah things sorted
*/