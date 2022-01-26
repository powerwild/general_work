import { useState } from 'react';
import './UseState.css';



const UseState = () => {
  const [theme, setTheme] = useState('light');
  const [count, setCount] = useState(0);

  return (
    <div className={theme}>
      <h1>UseState Component</h1>
      <button onClick={()=> setTheme('dark')}>Dark</button>
      <button onClick={()=> setTheme('light')}>Light</button>
      <h1>{count}</h1>
      <button onClick={()=> setCount(count => count + 1)}>Increment</button>

    </div>
  );
};
export default UseState;
