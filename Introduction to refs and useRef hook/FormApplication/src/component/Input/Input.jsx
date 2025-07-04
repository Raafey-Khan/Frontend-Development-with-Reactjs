import { useContext, useImperativeHandle, useState, useRef, useEffect } from "react";
import { FormContext } from "../../providers/FormContext";
import './Input.css';

function Input({type, id, label, ref, checkOnBlur, placeholder})  {
   const {formInput, setFormInput} = useContext(FormContext)
   const [isValid, setIsValid] = useState(true);
   const [shake, setShake] = useState(false)
   const [text, setText] = useState("");

//    introduce a local ref // means local to compenent
      const localRef = useRef(null)

    useEffect(() => {
        setIsValid(true);
        setShake(false);
    },[text])

      useImperativeHandle(ref,() => {
        return{
            focus: () => localRef.current.focus(),
            setInvalid: () => setIsValid(false),
            shake: () => setShake(true)
        }
      },[]) //useImperativeHandle takes three arguments

    return(
        <>
        <input 
          className={`${(!isValid) ? "error-input" : ""} ${(shake) ? 'shake' : ''}`}
          ref={localRef}
           type={type}
           id={id}
           value={text}
           onBlur={checkOnBlur}
           placeholder={placeholder ? placeholder : ''}
           onChange={(e) => {
            setText(e.target.value);
            setFormInput({...formInput, [label]: e.target.value})

        }}
         />
         <br />
         <span> {(!isValid) ? `${label} is invalid ` : '' }</span>

         <br />
        </>
    )
}

export default Input;