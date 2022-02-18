import React from 'react';
import ReactDOM from 'react-dom';
import { PupProvider } from './context/PupContext';
import App from './App';
import './index.css';

const Root = () => {
  return (
    <PupProvider>
      <App />
    </PupProvider>
  )
}

ReactDOM.render(
  <React.StrictMode>
      <Root id='root'/>
  </React.StrictMode>,
  document.getElementById('root')
);
