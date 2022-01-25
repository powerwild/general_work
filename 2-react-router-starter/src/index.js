import React from 'react';
import ReactDOM from 'react-dom';
// import your Router
import './index.css';
import App from './App';


// create Root component here

// React Router basically is made up of 3 parts
// 1. Routers/BrowserRouter gives us access to react-router-dom
// 2. Router matchers set up navigation to our components
// 3. Navigation: Allows user to click around appliation like a regular website
// We use Link, NavLink, History, Redirect for navigation

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
