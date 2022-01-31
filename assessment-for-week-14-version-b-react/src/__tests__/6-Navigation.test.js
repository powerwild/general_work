import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import Navigation from '../components/Navigation';

describe('(7 points) Navigation', () => {
  test ('(1 points) Navigation renders a nav element', () => {
    const navigation = shallow(
      <Navigation />
    );
  
    expect(navigation.is('nav')).toBe(true);
  });
  
  test ('(1 points) Navigation renders four navigation links', () => {
    const navigation = shallow(
      <Navigation />
    );
  
    expect(navigation.find('NavLink')).toHaveLength(4);
  });
  
  test ('(1 points) Navigation renders a navigation link to "/trees"', () => {
    const navigation = shallow(
      <Navigation />
    );
  
    expect(navigation.find('NavLink').someWhere((navLink) => {
      return navLink.props().to === "/trees";
    })).toBe(true);
  });
  
  test ('(1 points) Navigation renders a navigation link to "/trees/new"', () => {
    const navigation = shallow(
      <Navigation />
    );
  
    expect(navigation.find('NavLink').someWhere((navLink) => {
      return navLink.props().to === "/trees/new";
    })).toBe(true);
  });
  test ('(1 points) Navigation renders a navigation link to "/filtered-trees"', () => {
    const navigation = shallow(
      <Navigation />
    );
  
    expect(navigation.find('NavLink').someWhere((navLink) => {
      return navLink.props().to === "/filtered-trees";
    })).toBe(true);
  });
  test ('(1 points) Navigation renders a navigation link to "/toggle-tree-type"', () => {
    const navigation = shallow(
      <Navigation />
    );
  
    expect(navigation.find('NavLink').someWhere((navLink) => {
      return navLink.props().to === "/toggle-tree-type";
    })).toBe(true);
  });
  
  test ('(1 points) Navigation is used by the App component', () => {
    const appWrapper = shallow(<App />);
    expect(appWrapper.find(Navigation)).toHaveLength(1);
  });
});

