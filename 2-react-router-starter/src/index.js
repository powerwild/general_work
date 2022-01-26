import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';


// create Root component here
const Root = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}
// React Router basically is made up of 3 parts
// 1. Routers/BrowserRouter gives us access to react-router-dom
// 2. Router matchers set up navigation to our components
// 3. Navigation: Allows user to click around appliation like a regular website
// We use Link, NavLink, History, Redirect for navigation

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
