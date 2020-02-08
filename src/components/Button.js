import React from 'react';

const Button = ({ count, setCount }) => (
  <div>
    <p>Click as much as you're pissed</p>
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  </div>

)

export default Button;
