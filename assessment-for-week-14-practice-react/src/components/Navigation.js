import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/fruits/new'>Fruit Form</NavLink>
      <NavLink to='/fav-fruit'> Favorite Friut</NavLink>
      <NavLink to='/set-fav-fruit'>Pick Favortie Fruit</NavLink>
    </nav>
  );
}

export default Navigation;
