import TreesIndex from './components/TreesIndex';
import FilteredTreesIndex from './components/FilteredTreesIndex';
import Navigation from './components/Navigation';
import ToggleTreeType from './components/ToggleTreeType';
import TreeForm from './components/TreeForm';
import TreeShow from './components/TreeShow';
import { Switch, Route } from 'react-router-dom';
import trees from "./mockData/trees.json";

function App() {
  return (
    <>
      <h1>Welcome to the Trees App</h1>
      <Navigation trees={trees} />
      <Switch>
        <Route exact={true} path='/trees'>
          <TreesIndex trees={trees}/>
        </Route>
        <Route path='/trees/new'>
          <TreeForm trees={trees} />
        </Route>
        <Route path='/filtered-trees'>
          <FilteredTreesIndex trees={trees} />
        </Route>
        <Route path='/toggle-tree-type'>
          <ToggleTreeType trees={trees} />
        </Route>
        <Route path='/trees/:treeId'>
          <TreeShow trees={trees} />
        </Route>
        <Route>Page Not Found</Route>
      </Switch>
    </>
  );
}

export default App;
