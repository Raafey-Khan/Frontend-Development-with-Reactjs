
import Form from './component/Form/Form'
import './App.css';
import { FormContext } from './providers/FormContext'
import { useState } from 'react';

function App() {
  const [formInput, setFormInput] = useState({email: '', password: ''})
  return (
    <>
    Form Application
    <FormContext value={{formInput, setFormInput}}>
       <Form/>
    </FormContext>

   
    </>
  )
}

export default App

// ref 1) stores timer id    2) ref reference the dom elements