import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import TreeTypeProvider from './context/TreeTypeContext';

const Root = () => {
  return (
    <TreeTypeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TreeTypeProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root'),
);
