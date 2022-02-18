import React from 'react';
import { mount, shallow } from 'enzyme';

import App from '../App';
import ToggleTreeType from '../components/ToggleTreeType';
import TreeTypeProvider from '../context/TreeTypeContext';
import { useContext } from 'react';

const mockFn = jest.fn();

jest.mock('react', () => ({
  ...jest.requireActual('react'), // use actual for all non-hook parts
  useContext: jest.fn()
}));

describe('(7 points) ToggleTreeType', () => {
  test ('(1 points) ToggleTreeType renders a div with a class of "toggle-tree-type"', () => {
    useContext.mockImplementation(() => ({
      treeType: "Deciduous",
      treeTypeId: "1",
      setTreeTypeId: mockFn,
    }));
    const toggle = mount(
      <TreeTypeProvider>
        <ToggleTreeType />
      </TreeTypeProvider>
    );
    
    expect(toggle.find('div.toggle-tree-type')).toHaveLength(1);
    expect(toggle.find('h2').text()).toEqual("Deciduous or Evergreen?");
    expect(toggle.find('h2').parent().is('div.toggle-tree-type')).toBe(true); 
  });
  
  test ('(3 points) ToggleTreeType changes the context\'s treeType value to be "Deciduous" or "Evergreen"', () => {
    useContext.mockImplementation(() => ({
      treeType: "Deciduous",
      treeTypeId: "1",
      setTreeTypeId: mockFn,
    }));
    const toggle = mount(
      <TreeTypeProvider>
        <ToggleTreeType />
      </TreeTypeProvider>
    );
    
    expect(toggle.find('div.toggle-tree-type')).toHaveLength(1);
    expect(toggle.find('h2').text()).toEqual("Deciduous or Evergreen?");
    expect(toggle.find('h2').parent().is('div.toggle-tree-type')).toBe(true); 
  
    toggle.find('input[name="treeTypeId"]').at(0).simulate('change', { target: { value: "1" } });
    expect(mockFn.mock.calls[0][0]).toEqual("1");
  
    toggle.find('input[name="treeTypeId"]').at(1).simulate('change', { target: { value: "2" } });
    expect(mockFn.mock.calls[1][0]).toEqual("2");
  });

  test ('(1 points) ToggleTreeType Deciduous radio button is checked when context\'s treeType is "Deciduous"', () => {
    useContext.mockImplementation(() => ({
      treeType: "Deciduous",
      treeTypeId: "1",
      setTreeTypeId: mockFn,
    }));
    const toggle = mount(
      <TreeTypeProvider>
        <ToggleTreeType />
      </TreeTypeProvider>
    );
    
    expect(toggle.find('input[name="treeTypeId"]').at(0).props().checked).toEqual(true);
    expect(toggle.find('input[name="treeTypeId"]').at(1).props().checked).toEqual(false);
  });

  test ('(1 points) ToggleTreeType Evergreen radio button is checked when context\'s treeType is "Evergreen"', () => {
    useContext.mockImplementation(() => ({
      treeType: "Evergreen",
      treeTypeId: "2",
      setTreeTypeId: mockFn,
    }));
    const toggle = mount(
      <TreeTypeProvider>
        <ToggleTreeType />
      </TreeTypeProvider>
    );
    
    expect(toggle.find('input[name="treeTypeId"]').at(0).props().checked).toEqual(false);
    expect(toggle.find('input[name="treeTypeId"]').at(1).props().checked).toEqual(true);
  });
  
  test ('(1 points) ToggleTreeType is used by the App component', () => {
    const appWrapper = shallow(<App />);
    expect(appWrapper.find(ToggleTreeType)).toHaveLength(1);
  });
});

