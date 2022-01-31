import React from 'react';
import { shallow, mount } from 'enzyme';

import App from '../App';
import FilteredTreesIndex from '../components/FilteredTreesIndex';
import TreesIndex from '../components/TreesIndex';
import trees from "../mockData/trees.json";
import { BrowserRouter } from 'react-router-dom';
import TreeTypeProvider from '../context/TreeTypeContext';

const mockContextValue = {
  treeType: "Deciduous",
  treeTypeId: "1",
  setTreeTypeId: () => {},
};

jest.mock('react', () => ({
  ...jest.requireActual('react'), // use actual for all non-hook parts
  useContext: () => mockContextValue
}));

const filteredTrees = [
  {
    id: "1",
    name: "Apple",
    type: "Deciduous",
    avgHeight: 4
  },
  {
    id: "2",
    name: "Banyan",
    type: "Deciduous",
    avgHeight: 20
  },
];

describe('(8 points) FilteredTreesIndex', () => {
  test ('(1 points) FilteredTreesIndex renders an h2 with the text as the context\'s tree type', () => {
    const filtered = shallow(
      <FilteredTreesIndex trees={trees} />
    );
  
    expect(filtered.find('h2').text()).toEqual(
      expect.stringContaining("Deciduous"),
    );
  });

  test ('(1 points) FilteredTreesIndex renders the TreesIndex component', () => {
    const filtered = mount(
      <BrowserRouter>
        <TreeTypeProvider>
          <FilteredTreesIndex trees={trees} />
        </TreeTypeProvider>
      </BrowserRouter>
    );
  
    expect(filtered.contains(TreesIndex)).toBe(true);
  });
  
  test ('(5 points) FilteredTreesIndex shows trees that match the type in the context\'s value', () => {
    let filtered = mount(
      <BrowserRouter>
        <TreeTypeProvider>
          <FilteredTreesIndex trees={trees} />
        </TreeTypeProvider>
      </BrowserRouter>
    );

    expect(filtered.find('Link')).toHaveLength(filteredTrees.length);
  
    filteredTrees.forEach((tree, idx) => {
      expect(filtered.find('Link').at(idx).text()).toEqual(tree.name);
      expect(filtered.find('Link').at(idx).props().to).toEqual(`/trees/${tree.id}`);
    });


    const mockTestTrees = [
      {
        id: 1,
        name: 'Tree 1',
        type: 'Type 1'
      },
      {
        id: 2,
        name: 'Tree 2',
        type: 'Type 2'
      },
      {
        id: 3,
        name: 'Tree 3',
        type: 'Type 1'
      },
      {
        id: 4,
        name: 'Tree 4',
        type: 'Type 2'
      },
    ];

    const mockFilteredTestTrees = [
      {
        id: 2,
        name: 'Tree 2',
        type: 'Type 2'
      },
      {
        id: 4,
        name: 'Tree 4',
        type: 'Type 2'
      },
    ];

    mockContextValue.treeType = 'Type 2';

    filtered = mount(
      <BrowserRouter>
        <TreeTypeProvider>
          <FilteredTreesIndex trees={mockTestTrees} />
        </TreeTypeProvider>
      </BrowserRouter>
    );

    expect(filtered.find('Link')).toHaveLength(mockFilteredTestTrees.length);
  
    mockFilteredTestTrees.forEach((tree, idx) => {
      expect(filtered.find('Link').at(idx).text()).toEqual(tree.name);
      expect(filtered.find('Link').at(idx).props().to).toEqual(`/trees/${tree.id}`);
    });
  });
  
  test ('(1 points) FilteredTreesIndex is used by the App component', () => {
    const appWrapper = shallow(<App />);
    expect(appWrapper.find(FilteredTreesIndex)).toHaveLength(1);
  });
});

