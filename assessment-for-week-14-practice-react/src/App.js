import FruitsIndex from "./components/FruitsIndex";
import FruitForm from "./components/FruitForm";
import FavoriteFruit from "./components/FavoriteFruit";
import FruitShow from "./components/FruitShow";
import fruits from "./mockData/fruits.json";
import SetFavoriteFruit from "./components/SetFavoriteFruit";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <>
      <h1>Welcome to Fruits App</h1>
      <Switch>
        <Route exact path='/'>
          <FruitsIndex fruits={fruits}/>
        </Route>
        <Route path='/fruits/new'>
          <FruitForm fruits={fruits}/>
        </Route>
        <Route path='/fav-fruit'>
          <FavoriteFruit />
        </Route>
        <Route path='/set-fav-fruit'>
          <SetFavoriteFruit fruits={fruits}/>
        </Route>
        <Route path='/fruits/:fruitId'>
          <FruitShow />
        </Route>
        <Route>Page Not Found</Route>
      </Switch>
    </>
  );
}

export default App;
