import React from 'react';
import { shallow, mount } from 'enzyme';

import App from '../App';
import { Router } from 'react-router-dom';
import TreeTypeProvider from '../context/TreeTypeContext';
import TreesIndex from '../components/TreesIndex';
import TreeForm from '../components/TreeForm';
import FilteredTreesIndex from '../components/FilteredTreesIndex';
import ToggleTreeType from '../components/ToggleTreeType';
import TreeShow from '../components/TreeShow';
import { createMemoryHistory } from "history";

jest.mock('react', () => ({
  ...jest.requireActual('react'), // use actual for all non-hook parts
  useContext: () => ({
    treeType: "Deciduous",
    treeTypeId: "1",
    setTreeTypeId: () => {},
  })
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({ treeId: "1" }),
  useRouteMatch: () => ({ url: `/trees/1` }),
}));

describe('(6 points) Routes', () => {
  test ('(1 points) TreesIndex should render at the path of "/trees" exactly', () => {
    const history = createMemoryHistory();
    history.push('/trees');
    const appWrapper = mount(
      <Router history={history}>
        <TreeTypeProvider>
          <App />
        </TreeTypeProvider>
      </Router>
    );
  
    expect(appWrapper.find(TreesIndex)).toHaveLength(1);
    
    expect(appWrapper.find(TreeShow)).toHaveLength(0);
    expect(appWrapper.find(TreeForm)).toHaveLength(0);
    expect(appWrapper.find(FilteredTreesIndex)).toHaveLength(0);
    expect(appWrapper.find(ToggleTreeType)).toHaveLength(0);
  });
  
  test ('(1 points) TreeForm should render at the path of "/trees/new"', () => {
    const history = createMemoryHistory();
    history.push('/trees/new');
    const appWrapper = mount(
      <Router history={history}>
        <TreeTypeProvider>
          <App />
        </TreeTypeProvider>
      </Router>
    );
  
    expect(appWrapper.find(TreeForm)).toHaveLength(1);
    
    expect(appWrapper.find(TreesIndex)).toHaveLength(0);
    expect(appWrapper.find(TreeShow)).toHaveLength(0);
    expect(appWrapper.find(FilteredTreesIndex)).toHaveLength(0);
    expect(appWrapper.find(ToggleTreeType)).toHaveLength(0);
  });
  
  test ('(1 points) FilteredTreesIndex should render at the path of "/filtered-trees"', () => {
    const history = createMemoryHistory();
    history.push('/filtered-trees');
    const appWrapper = mount(
      <Router history={history}>
        <TreeTypeProvider>
          <App />
        </TreeTypeProvider>
      </Router>
    );
  
    expect(appWrapper.find(FilteredTreesIndex)).toHaveLength(1);

    expect(appWrapper.find(TreeShow)).toHaveLength(0);
    expect(appWrapper.find(TreeForm)).toHaveLength(0);
    expect(appWrapper.find(ToggleTreeType)).toHaveLength(0);
  });
  
  test ('(1 points) ToggleTreeType should render at the path of "/toggle-tree-type"', () => {
    const history = createMemoryHistory();
    history.push('/toggle-tree-type');
    const appWrapper = mount(
      <Router history={history}>
        <TreeTypeProvider>
          <App />
        </TreeTypeProvider>
      </Router>
    );
  
    expect(appWrapper.find(ToggleTreeType)).toHaveLength(1);
  
    expect(appWrapper.find(TreesIndex)).toHaveLength(0);
    expect(appWrapper.find(TreeShow)).toHaveLength(0);
    expect(appWrapper.find(TreeForm)).toHaveLength(0);
    expect(appWrapper.find(FilteredTreesIndex)).toHaveLength(0);
  });
  
  test ('(1 points) TreeShow should render at the path of "/trees/:treeId"', () => {
    const history = createMemoryHistory();
    history.push('/trees/2');
    const appWrapper = mount(
      <Router history={history}>
        <TreeTypeProvider>
          <App />
        </TreeTypeProvider>
      </Router>
    );
  
    expect(appWrapper.find(TreeShow)).toHaveLength(1);
    expect(appWrapper.find(TreesIndex)).toHaveLength(0);
    expect(appWrapper.find(TreeForm)).toHaveLength(0);
    expect(appWrapper.find(FilteredTreesIndex)).toHaveLength(0);
    expect(appWrapper.find(ToggleTreeType)).toHaveLength(0);
  });
  
  test ('(1 points) "Page Not Found" should render at all other paths', () => {
    const history = createMemoryHistory();
    history.push('/blah');
    const appWrapper1 = mount(
      <Router history={history}>
        <TreeTypeProvider>
          <App />
        </TreeTypeProvider>
      </Router>
    );
    const regex = /page not found/i;
  
    expect(regex.test(appWrapper1.html())).toBe(true);
  
    expect(appWrapper1.find(TreesIndex)).toHaveLength(0);
    expect(appWrapper1.find(TreeShow)).toHaveLength(0);
    expect(appWrapper1.find(TreeForm)).toHaveLength(0);
    expect(appWrapper1.find(FilteredTreesIndex)).toHaveLength(0);
    expect(appWrapper1.find(ToggleTreeType)).toHaveLength(0);
  
    history.push('/random-unknown')
    const appWrapper2 = mount(
      <Router history={history}>
        <TreeTypeProvider>
          <App />
        </TreeTypeProvider>
      </Router>
    );
  
    expect(regex.test(appWrapper2.html())).toBe(true);
  });
});
