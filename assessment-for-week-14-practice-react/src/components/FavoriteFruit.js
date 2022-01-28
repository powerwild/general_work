import { NavLink } from "react-router-dom";
import { FavFruitContext, useFruitContext } from "../context/FavFruitContext";

const FavoriteFruit = () => {
  const { favFruitId } = useFruitContext();
  return (
    <div className='fav-fruit'>
      <h2>Favorite Fruit</h2>
      <NavLink to={`/fruits/${favFruitId}`} />
    </div>
  )
}

export default FavoriteFruit;
