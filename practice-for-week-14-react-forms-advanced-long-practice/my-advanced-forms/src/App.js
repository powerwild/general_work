import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import { SampleSurvey } from './components/SampleSurvey';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Switch>
        <Route exact path='/'>
          <>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            <p>(c) Copyright .................................................................................................................................................................................................</p>
          </>
        </Route>
        <Route path='/sample-survey'>
          <SampleSurvey />
        </Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Switch>
    </div>
  );
}

export default App;
