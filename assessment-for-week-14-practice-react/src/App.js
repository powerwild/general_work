import FruitsIndex from "./components/FruitsIndex";
import FruitForm from "./components/FruitForm";
import FavoriteFruit from "./components/FavoriteFruit";
import fruits from "./mockData/fruits.json";

function App() {
  return (
    <>
      <h1>Welcome to Fruits App</h1>
      <FruitsIndex fruits={fruits}/>
      <FruitForm fruits={fruits}/>
      <FavoriteFruit />
    </>
  );
}

export default App;
