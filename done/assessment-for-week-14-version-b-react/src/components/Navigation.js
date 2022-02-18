import { NavLink } from "react-router-dom";


function Navigation() {
  return (
    <nav>
      <NavLink to='/trees'>Trees</NavLink>
      <NavLink to='/trees/new'>Tree Form</NavLink>
      <NavLink to='/filtered-trees'>Filtered Trees</NavLink>
      <NavLink to='/toggle-tree-type'>Toggle Tree Type</NavLink>
    </nav>
  );
}

export default Navigation;
