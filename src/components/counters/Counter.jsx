import React, {useState} from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    function add() {
        setCounter(counter + 1);
    }

    function sub() {
        setCounter(counter - 1);
    }

    return (
        <div>
            <h2>Counter {counter}</h2>
            <button onClick={add}>+</button>
            <button onClick={sub}>-</button>
        </div>
    );
}

export default Counter;
