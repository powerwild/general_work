import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import TreeShow from '../components/TreeShow';
import trees from "../mockData/trees.json";

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({ treeId: "1" }),
  useRouteMatch: () => ({ url: `/trees/1` }),
}));

describe('(5 points) Route path: /trees/1', () => {
  test('(1 points) TreeShow renders a div with a class of "tree-show"', () => {
    const treeShow = shallow(
      <TreeShow trees={trees}/>
    );

    expect(treeShow.find('div.tree-show')).toHaveLength(1);
  });

  test('(1 points) TreeShow renders an h2 with the name of the tree with id of 1', () => {
    const treeShow = shallow(
      <TreeShow trees={trees}/>
      );
      
    expect(treeShow.find('h2').parent().is('div.tree-show')).toBe(true); 
    
    expect(treeShow.find('h2').text()).toEqual("Apple");
  });

  test('(1 points) TreeShow renders the type of the tree with id of 1', () => {
    const treeShow = shallow(
      <TreeShow trees={trees}/>
    );

    expect(treeShow.contains("Deciduous")).toBe(true);
    expect(treeShow.contains("Evergreen")).toBe(false);
  });

  test('(1 points) TreeShow renders the average height of the tree with id of 1', () => {
    const treeShow = shallow(
      <TreeShow trees={trees}/>
    );

    expect(treeShow.contains(4)).toBe(true);
  });

  test('(1 points) TreeShow is used by the App component', () => {
    const appWrapper = shallow(<App />);
    expect(appWrapper.find(TreeShow)).toHaveLength(1);
  });
});
