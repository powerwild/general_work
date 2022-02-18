import { useState, useEffect } from 'react';
import './UseEffect.css';

const UseEffect = () => {
  // set initial values
  const [toggleOne, setToggleOne] = useState(false);
  const [toggleTwo, setToggleTwo] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(()=> {
    console.log('useEffect runs every time');
  });
  useEffect(()=> {
    console.log('useEffect1 ran');
  }, []);
  useEffect(()=> {
    console.log('useEffect2 ran');
  }, [toggleTwo]);
  useEffect(()=> {
    console.log('useEffect3 ran count: ', count);
    return () => console.log('useEffect3 Cleanup ran and cleaned count: ', count)
  }, [count]);

  return (
    <div>
      {console.log('rendered or re-rendered')}
      <h1>UseEffect Component</h1>
      {/*add event handlers */}
      <button onClick={()=> setToggleOne(!toggleOne)}>Toggle 1</button>
      <button onClick={()=> setToggleTwo(!toggleTwo)}>Toggle 2</button>
      <button onClick={()=> setCount((prevCount)=> prevCount + 1)}>UpCount</button>
    </div>
  );
};
export default UseEffect;
