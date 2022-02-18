import { Route } from 'react-router-dom';
import Home from './components/Home';
import Stocks from './components/Stocks';
import MovieDetails from './components/MovieDetails';
import Movies from './components/Movies';


function App() {
  return (
    <div className='main'>
      <h1>App Component</h1>
      <Stocks />
      <Movies />
      <MovieDetails />
      <Route path='/'>
        <Home />
      </Route>
    </div>
  );
}

export default App;
