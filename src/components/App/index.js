// == Import npm
import React, { useState } from 'react';

// == Import
import './styles.css';
import Button from '../Button';

// == Composant
const App = () => {
  
  const [count, setCount] = useState(0);
  
  return (
    <Button count={count} setCount={setCount} />
  );

}


// == Export
export default App;
