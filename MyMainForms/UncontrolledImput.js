import React, {useRef} from 'react';

const UncontrolledInput = () => {
    const phoneRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Phone Number: ${phoneRef.current.value}`);
    }

    return (
        <form onSubmit={handleSubmit}>
             <input type="text" ref={phoneRef} placeholder="enter your number"/>
             < button type="submit">Submitted</button>
        </form>
    );
};

export default UncontrolledInput;