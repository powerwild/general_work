import { NavLink } from "react-router-dom";


function Navigation() {
  return (
    <nav>
      <NavLink to='/' />
      <NavLink to='/fruits/new' />
      <NavLink to='/fav-fruit' />
      <NavLink to='/set-fav-fruit' />
    </nav>
  )
}

export default Navigation;
