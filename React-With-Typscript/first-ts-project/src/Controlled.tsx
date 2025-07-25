import { ChangeEvent, FC, FormEvent, useState } from "react";

const Controlled: FC = () => {
    const [value, setValue] = useState({
        firstname: '',
        lastname: '',
        email: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value: newValue } = e.target;
        setValue({
            ...value,
            [name]: newValue,
        });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="firstname" value={value.firstname} onChange={handleChange} placeholder="firstname.." />
            <br />
            <input type="text" name="lastname" value={value.lastname} onChange={handleChange} placeholder="lastname.." />
            <br />
            <input type="email" name="email" value={value.email} onChange={handleChange} placeholder="email.." />
            <br />
            <button>Submit</button>
        </form>
    );
};

export default Controlled;
