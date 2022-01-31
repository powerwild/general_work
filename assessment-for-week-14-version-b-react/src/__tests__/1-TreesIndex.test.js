import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import TreesIndex from '../components/TreesIndex';
import trees from "../mockData/trees.json";

describe('(8 points) TreesIndex', () => {
  test ('(1 points) TreesIndex renders a div with a class of "trees-index"', () => {
    const treesIndex = shallow(
      <TreesIndex trees={trees}/>
    );
  
    expect(treesIndex.is('div.trees-index')).toBe(true);
  });
  
  test ('(1 points) TreesIndex renders an h2 with the text "Trees Index"', () => {
    const treesIndex = shallow(
      <TreesIndex trees={trees}/>
    );
  
    expect(treesIndex.find('h2').text()).toEqual("Trees Index");
    expect(treesIndex.find('h2').parent().is('div.trees-index')).toBe(true); 
  });
  
  test ('(5 points) TreesIndex renders a list of trees from the mockData', () => {
    const treesIndex = shallow(
      <TreesIndex trees={trees}/>
    );

    expect(treesIndex.find('Link')).toHaveLength(trees.length);
  
    trees.forEach((tree, idx) => {
      expect(treesIndex.find('Link').at(idx).text()).toEqual(tree.name);
      expect(treesIndex.find('Link').at(idx).props().to).toEqual(`/trees/${tree.id}`);
    });
  });
  
  test ('(1 points) TreesIndex is used by the App component', () => {
    const appWrapper = shallow(<App />);
    expect(appWrapper.find(TreesIndex)).toHaveLength(1);
  });
});

