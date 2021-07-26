import React, {useState} from 'react';

const Counter = props => {
  const [count, setCount] = useState(0);
  const handleClick = incOrDec => {
    if(incOrDec === 'Increase'){
      setCount(prevCount => prevCount + 1)
    } else setCount(prevCount => prevCount - 1)
  }
  return (
    <div >
      <p>You clicked {count} times</p>
      <button onClick={() => handleClick('Decrease')}>
        Decrease
      </button>
      <button onClick={() => handleClick('Increase')}>
        Increase
      </button>
    </div>
  );
}

export default Counter
