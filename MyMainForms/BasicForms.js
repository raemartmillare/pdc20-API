import React from "react";
import { useState } from "react";


const BasicForm = () => {
    const [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Submitted Name: ${name}`); 
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={handleChange} placeholder="enter your name"/>
            < button type="submit">Submitted</button>
            {name && <p>your name is: {name}</p>}

        </form>
    );
};

export default BasicForm;