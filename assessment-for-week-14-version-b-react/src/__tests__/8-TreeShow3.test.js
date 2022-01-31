import React from 'react';
import { shallow } from 'enzyme';

import TreeShow from '../components/TreeShow';
import trees from "../mockData/trees.json";

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({ treeId: "3" }),
  useRouteMatch: () => ({ url: `/trees/3` }),
}));

describe('(3 points) Route path: /trees/3', () => {
  test('(1 points) TreeShow renders an h2 with the name of the tree with id of 3', () => {
    const treeShow = shallow(
      <TreeShow trees={trees}/>
      );
      
    expect(treeShow.find('h2').parent().is('div.tree-show')).toBe(true); 
    
    expect(treeShow.find('h2').text()).toEqual("River Red Gum");
  });

  test('(1 points) TreeShow renders the type of the tree with id of 3', () => {
    const treeShow = shallow(
      <TreeShow trees={trees}/>
    );

    expect(treeShow.contains("Evergreen")).toBe(true);
    expect(treeShow.contains("Deciduous")).toBe(false);
  });

  test('(1 points) TreeShow renders the average height of the tree with id of 3', () => {
    const treeShow = shallow(
      <TreeShow trees={trees}/>
    );

    expect(treeShow.contains(32)).toBe(true);
  });
});