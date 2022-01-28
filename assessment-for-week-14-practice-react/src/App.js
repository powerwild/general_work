import FruitsIndex from "./components/FruitsIndex";
import FruitForm from "./components/FruitForm";
import fruits from "./mockData/fruits.json";

function App() {
  return (
    <>
      <h1>Welcome to Fruits App</h1>
      <FruitsIndex fruits={fruits}/>
      <FruitForm fruits={fruits}/>
    </>
  );
}

export default App;
