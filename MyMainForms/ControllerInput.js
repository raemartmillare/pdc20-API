import React, { useState } from "react";

const ControllerInput = () => {
    const [email, setEmail] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);   
        console.log("Current Email: ", e.target.value);
    }

    return (
   
        <input 
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter you Email: "
        />

       
        );
};

export default ControllerInput;