import React, { useState, useCallback } from 'react';

export function Assignment1() {
    const [count, setCount] = useState(0);

    // useCallback ensures that these functions are not recreated on every render
    const handleIncrement = useCallback(() => {
        setCount(prevCount => prevCount + 1);
    }, []);

    const handleDecrement = useCallback(() => {
        setCount(prevCount => prevCount - 1);
    }, []);

    return (
        <div>
            <p>Count: {count}</p>
            <CounterButtons onIncrement={handleIncrement} onDecrement={handleDecrement} />
        </div>
    );
};

const CounterButtons = ({ onIncrement, onDecrement }) => (
    <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
    </div>
);
