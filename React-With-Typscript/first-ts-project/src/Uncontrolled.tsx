import { FC, FormEvent } from "react";
import { useRef } from "react";
const Uncontrolled: FC = () => {


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(firstNameRef.current.value);

    };
    

    const firstNameRef = useRef(null);

    return (
        <form onSubmit={handleSubmit}>
            <input ref={firstNameRef} type="text" name="firstname"  placeholder="firstname.." id='firstname' />
            <br />
            <input type="text" name="lastname"  placeholder="lastname.." id="secondname" />
        
            <button>Submit</button>
        </form>
    );
};

export default Uncontrolled;
