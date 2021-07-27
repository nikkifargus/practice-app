import React, {useState} from 'react';
import './counter.scss'
const Counter = props => {
  const [count, setCount] = useState(0);
  const handleClick = incOrDec => {
    if(incOrDec === 'Increase'){
      setCount(prevCount => prevCount + 1)
    } else setCount(prevCount => prevCount - 1)
  }
  return (
    <div className="row">

      <p>You clicked {count} times</p>
      <div className="col-2">
        <button className="decrease" onClick={() => handleClick('Decrease')}>
          -
        </button>
      </div>
      <div className="col-10">
        <button className="increase" onClick={() => handleClick('Increase')}>
          +
        </button>
      </div>
    </div>
  );
}

export default Counter
