import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HoroscopeProv } from './context/HoroscopeContext';

const Root = () => {
  return (
    <HoroscopeProv>
      <App />
    </HoroscopeProv>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <Root id='root' />
  </React.StrictMode>,
  document.getElementById('root')
);
