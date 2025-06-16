import './Form.css'
import { useState } from 'react';
import validatePassword from '../../helper/passwordValidator';
import validateEmail from '../../helper/emailValidator';
function Form() {


    const [formValues, setFormValues] = useState({
        email: "",
        password: ""
    });



    const handleFormSubmit = (event) => {
        event.preventDefault();
        handleValidateEmail();
        handleValidatePassword();
        
        console.log(formValues);

    }

    const handleValidatePassword = () => {
        const password = formValues.password;
        
        if(!validatePassword(password)) {
            console.log(`Password doesn't contain required parameters `);
        document.getElementById('password-input').focus()
        } 
    }

    const handleValidateEmail = () => {
        const email = formValues.email;
      
        if (!validateEmail(email)) {
              document.getElementById('email-input').focus()
            console.log(`email is doen't contain required parameters`);
        }
    }

    return(
        <div>

        New Form

        <form onSubmit={handleFormSubmit} >

            <div className="wrapper email-input-wrapper">
                <input 
                id='email-input'
                type="text" 
                value={formValues.email} 
                onChange={(event) => setFormValues({ ...formValues, email: event.target.value})}
                
                />
            </div>

            <div className="wrapper password-input-wrapper">
                <input 
                id='password-input'
                type="password" 
                value={formValues.password} 
                onChange={(event) => setFormValues({ ...formValues, password: event.target.value})}
                
                />
            </div>

            <input id='submit-input' type="submit" />

        </form>
        
        
        </div>
    )
}

export default Form;