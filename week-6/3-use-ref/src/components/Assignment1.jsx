import React, { useEffect, useRef } from 'react';

const FocusInputComponent = () => {
  const inputRef = useRef(null);

  // Focus the input field when the component mounts
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleButtonClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        placeholder="Type something..."
      />
      <button onClick={handleButtonClick}>
        Focus Input
      </button>
    </div>
  );
};

export default FocusInputComponent;
