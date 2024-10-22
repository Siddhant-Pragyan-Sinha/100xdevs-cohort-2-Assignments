import { useEffect, useRef } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {

    let useref = useRef(null);
    useEffect(() => {
        useref.current.focus();
    }, [useref]);

    const handleButtonClick = () => {
        useref.current.focus();
    };

    return (
        <div>
            <input type="text" placeholder="Enter text here" ref={useref}/>
            <button onClick={handleButtonClick}>Focus Input</button>
        </div>
    );
};
