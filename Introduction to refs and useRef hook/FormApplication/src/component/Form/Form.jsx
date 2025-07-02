import './Form.css';
import { useEffect, useRef, useState } from 'react';
import validatePassword from '../../helper/passwordValidator';
import validateEmail from '../../helper/emailValidator';

function Form() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    useEffect(() => {
        console.log(emailRef.current);
        console.log(passwordRef.current);
    }, []);

    const [formValues, setFormValues] = useState({
        email: "",
        password: ""
    });

    const handleFormSubmit = (event) => {
        event.preventDefault();
        handleValidateEmail();
        handleValidatePassword();
        console.log(formValues);
    };

    const handleValidatePassword = () => {
        const password = formValues.password;

        if (!validatePassword(password)) {
            if(passwordRef.current){
                passwordRef.current.focus();
            }
            console.log("Password doesn't contain required parameters");
        }
    };

    const handleValidateEmail = () => {
        const email = formValues.email;

        if (!validateEmail(email)) {
            if (emailRef.current) {
                emailRef.current.focus();
            }
            console.log("Email doesn't contain required parameters");
        }
    };

    return (
        <div>
            New Form <br />
            <form onSubmit={handleFormSubmit}>
                <div className="wrapper email-input-wrapper">
                    <input
                        ref={emailRef}
                        id="email-input"
                        type="text"
                        value={formValues.email}
                        onChange={(event) =>
                            setFormValues({ ...formValues, email: event.target.value })
                        }
                    />
                </div>

                <div className="wrapper password-input-wrapper">
                    <input
                        id="password-input"
                        type="password"
                        value={formValues.password}
                        onChange={(event) =>
                            setFormValues({ ...formValues, password: event.target.value })
                        }
                    />
                </div>

                <input id="submit-input" type="submit" />
            </form>
        </div>
    );
}

export default Form;
