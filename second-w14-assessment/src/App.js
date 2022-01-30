import FruitsIndex from "./components/FruitsIndex";
import fruits from "./mockData/fruits.json";

function App() {
  return (
    <>
      <h1>Welcome to Fruits App</h1>
      <FruitsIndex fruits={fruits} />
    </>
  );
}

export default App;
