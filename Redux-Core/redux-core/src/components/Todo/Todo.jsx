import { bindActionCreators } from 'redux';
import {removeTodo, editTodo} from '../../actions/index'
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function Todo({title, id}) {
    const dispatch = useDispatch();
    const actions = bindActionCreators({ removeTodo, editTodo}, dispatch)

    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(title);

    function edittodo(){
        if(isEditing){
            // we were already editing
            
            actions.editTodo({id: id, title: editedText});
             setIsEditing(false);

        } else{
            setIsEditing(true);
        }
    }
  return (
    <div>
        {(isEditing) ? <input 
        value={editedText} 
        onChange={e => setEditedText(e.target.value)} /> : editedText}
       
        <button onClick={() => actions.removeTodo(id)}>Delete</button>
        <button onClick={edittodo}>{(isEditing) ? 'Save' : 'Edit'}</button>
    </div>
  )
}


export default Todo;