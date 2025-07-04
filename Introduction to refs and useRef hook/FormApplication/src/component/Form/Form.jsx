import './Form.css';
import Input from '../Input/Input';
import { useContext, useRef, useState } from 'react';
import { FormContext } from '../../providers/FormContext';
import emailValidator from '../../helper/emailValidator';
import passwordValidator from '../../helper/passwordValidator';

function Form() {




    const {formInput} = useContext(FormContext);


    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const usernameRef = useRef(null);
    const addressRef = useRef(null)


    const [step, setStep] = useState(1);


   const handleFormSubmit = (event) => {

    event.preventDefault();

    handleInvalidEmail();
    handleInvalidPassword();
    
    
    
   }
    const handleInvalidEmail = () => {
        if(!emailValidator(formInput.email)){
            emailRef.current.setInvalid();
            emailRef.current.shake();
        }
    }

    const handleInvalidPassword = () => {
        if(!passwordValidator(formInput.password)) {
            passwordRef.current.setInvalid();
            passwordRef.current.shake();
        }
    }

    if(step == 1){

         return (
        <div>
            New Form <br />
            <form onSubmit={handleFormSubmit} noValidate>
                <div className="wrapper email-input-wrapper">
            
                    <Input
                    id="email-input"
                    type="email"
                    label="email"
                    ref={emailRef}
                    key={1}
                    placeholder='email'
                    checkOnBlur={handleInvalidEmail}
                    
                    />
                </div>

                <div className="wrapper password-input-wrapper">
                
                    <Input
                    id="password-input"
                    type="password"
                    label="password"
                    ref={passwordRef}
                    key={2}
                    placeholder='password'
                    checkOnBlur={handleInvalidPassword}
                    />
                </div>

                <input id="submit-input" type="submit" />
            </form>

            <button onClick={() => {
                setStep(step+1)
            }}>
                Next
            </button>
        </div>
    );

    } else if (step == 2) {
         return (
        <div>
            New Form <br />
            <form onSubmit={handleFormSubmit} noValidate>
                <div className="wrapper email-input-wrapper">
            
                    <Input
                    id="username-input"
                    type="text"
                    label="username"
                    key={3}
                    placeholder='username'
                    ref={usernameRef}
                    checkOnBlur={() => console.log("empty") }
                    
                    />
                </div>

              

                <input id="submit-input" type="submit" />
            </form>

            <button onClick={() => {
                setStep(step+1)
            }}>
                Next
            </button>

            <button onClick={() => {
                setStep(step-1)
            }}>
                Prev
            </button>
        </div>
    );
    } else if(step == 3){
         return (
        <div>
            New Form <br />
            <form onSubmit={handleFormSubmit} noValidate>

                <div className="wrapper password-input-wrapper">
                
                    <Input
                    id="address-input"
                    type="text"
                    label="address"
                    ref={addressRef}
                    key={4}
                    placeholder="adress"
                    checkOnBlur={handleInvalidPassword}
                    />
                </div>

                <input id="submit-input" type="submit" />
            </form>

             <button onClick={() => {
                setStep(step-1)
            }}>
                Prev
            </button>

            <input id="submit-input" type="submit" />
        </div>
    );
    }

   
}

export default Form;
