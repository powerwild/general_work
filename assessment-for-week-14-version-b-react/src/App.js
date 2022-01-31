import TreesIndex from './components/TreesIndex';

import trees from "./mockData/trees.json";

function App() {
  return (
    <>
      <h1>Welcome to the Trees App</h1>
      <TreesIndex trees={trees}/>
    </>
  );
}

export default App;
