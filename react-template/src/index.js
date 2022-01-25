import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Link, NavLink, Switch } from 'react-router-dom';
import App from './App';
import Users from './components/Users';
import Profile from './components/Profile';

const Root = () => {
  const handleClicks = () => {
    console.log('Thanks for clicking!')
  };

  return (
    <BrowserRouter>
      <div>
        <NavLink to="/" exact={true} activeStyle={{ fontWeight: "bold" }}>App</NavLink>
        <NavLink activeClassName="red" to="/users">Users</NavLink>
        <NavLink activeClassName="blue" to="/hello">Hello</NavLink>
        <NavLink activeClassName="green" to="/users/1">Andrew's Profile</NavLink>
        <NavLink to="/" onClick={handleClick}>App with click handler</NavLink>

        <Switch>
          <Route exact path='/'>
            <App />
          </Route>
          <Route exact path="/users/:userId">
            <Profile />
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>
          <Route>
            <h1>404: Page not found</h1>
          </Route>
        </Switch>

      </div>
    </BrowserRouter>
  );
};


ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
