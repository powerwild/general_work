import React from 'react';
import { shallow, mount } from 'enzyme';

import App from '../App';
import TreeForm from '../components/TreeForm';

import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

const consoleSpy = jest.spyOn(global.console, 'log').mockImplementation();

describe('(15 points) TreeForm', () => {
  test ('(1 points) TreeForm renders a form with a class of "tree-form"', () => {
    const treeForm = shallow(
      <TreeForm />
    );
  
    expect(treeForm.is('form.tree-form')).toBe(true);
    expect(treeForm.find('h2').text().toLowerCase()).toEqual("add a tree");
    expect(treeForm.find('h2').parent().is('form.tree-form')).toBe(true); 
  });
  
  test ('(2 points) TreeForm has a controlled input for the name field', () => {
    const treeForm = shallow(
      <TreeForm />
    );
  
    expect(treeForm.find('input[name="name"]').props().value).toEqual("");
    treeForm.find('input[name="name"]').simulate('change', { target: { value: "Pear" } });
    expect(treeForm.find('input[name="name"]').props().value).toEqual("Pear");
  });
  
  test ('(2 points) TreeForm has a controlled input for the avgHeight field', () => {
    const treeForm = shallow(
      <TreeForm />
    );
  
    expect(treeForm.find('input[name="avgHeight"]').props().value).toEqual(1);
    treeForm.find('input[name="avgHeight"]').simulate('change', { target: { value: "30" } });
    expect(treeForm.find('input[name="avgHeight"]').props().value).toEqual("30");
  });
  
  test ('(2 points) TreeForm has a controlled input for the type dropdown', () => {
    const treeForm = shallow(
      <TreeForm />
    );
  
    expect(treeForm.find('select').props().value).toEqual("Deciduous");
    treeForm.find('select').simulate('change', { target: { value: "Evergreen" } });
    expect(treeForm.find('select').props().value).toEqual("Evergreen");
  });
  
  test ('(1 points) TreeForm shows an error in "ul.errors" if name is not filled in', () => {
    const treeForm = mount(
      <TreeForm />
    );
  
    expect(treeForm.find('input[name="name"]').props().value).toEqual("");
    expect(treeForm.find('ul.errors').children()).toHaveLength(1);
  });
  
  test ('(1 points) TreeForm shows an error in "ul.errors" if name more than 50 characters', () => {
    const treeForm = mount(
      <TreeForm />
    );
  
    expect(treeForm.find('input[name="name"]').props().value).toEqual("");
    treeForm.find('input[name="name"]').simulate('change', { target: { value: "This long string is exactly 51 characters in length" } });
    expect(treeForm.find('ul.errors').children()).toHaveLength(1);
  });
  
  test ('(1 points) TreeForm does not show any errors in "ul.errors" if name filled in', () => {
    const treeForm = mount(
      <TreeForm />
    );
  
    expect(treeForm.find('input[name="name"]').props().value).toEqual("");
    treeForm.find('input[name="name"]').simulate('change', { target: { value: "Pear" } });
    expect(treeForm.find('ul.errors').children()).toHaveLength(0);
  });
  
  test ('(1 points) TreeForm shows an error in "ul.errors" if avgHeight is less than 1', () => {
    const treeForm = mount(
      <TreeForm />
    );
  
    expect(treeForm.find('input[name="name"]').props().value).toEqual("");
    expect(treeForm.find('input[name="avgHeight"]').props().value).toEqual(1);
    treeForm.find('input[name="avgHeight"]').simulate('change', { target: { value: "0" } });
    expect(treeForm.find('ul.errors').children()).toHaveLength(2);
  });
  
  test ('(1 points) TreeForm shows an error in "ul.errors" if avgHeight is greater than 500', () => {
    const treeForm = mount(
      <TreeForm />
    );
  
    expect(treeForm.find('input[name="name"]').props().value).toEqual("");
    expect(treeForm.find('input[name="avgHeight"]').props().value).toEqual(1);
    treeForm.find('input[name="avgHeight"]').simulate('change', { target: { value: "501" } });
    expect(treeForm.find('ul.errors').children()).toHaveLength(2);
  });
  
  test ('(1 points) TreeForm is used by the App component', () => {
    const appWrapper = shallow(<App />);
    expect(appWrapper.find(TreeForm)).toHaveLength(1);
  });
  
  test ('(1 points) TreeForm disables the button when there are errors', () => {
    const treeForm = mount(
      <TreeForm />
    );
  
    expect(treeForm.find('input[name="name"]').props().value).toEqual("");
    expect(treeForm.find('ul.errors').children()).toHaveLength(1);
    expect(treeForm.find('button').props().disabled).toBe(true);
    treeForm.find('input[name="name"]').simulate('change', { target: { value: "Pear" } });
    expect(treeForm.find('input[name="name"]').props().value).toEqual("Pear");
    expect(treeForm.find('ul.errors').children()).toHaveLength(0);
    expect(treeForm.find('button').props().disabled).toBe(false);
  });
  
  test ('(1 points) TreeForm prints the form values and redirects to "/trees" when submitted', () => {
    const history = createMemoryHistory();
    history.push('/trees/new');
    const treeForm = mount(
      <Router history={history}>
        <App />
      </Router>
    );
  
    expect(history.location.pathname).toBe("/trees/new");
    treeForm.find('input[name="name"]').simulate('change', { target: { value: "Northern White Cedar" } });
    treeForm.find('input[name="avgHeight"]').simulate('change', { target: { value: "30" } });
    treeForm.find('select').simulate('change', { target: { value: "Evergreen" } });
    expect(treeForm.find('ul.errors').children()).toHaveLength(0);
    expect(treeForm.find('button').props().disabled).toBe(false);
    treeForm.find('form').simulate('submit', { preventDefault: () => {} });
    expect(history.location.pathname).toBe("/trees");
    expect(consoleSpy.mock.calls[0][0]).toEqual({ name: "Northern White Cedar", avgHeight: "30", type: "Evergreen" });
  });
})

