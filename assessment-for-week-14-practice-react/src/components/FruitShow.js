import { useParams } from "react-router-dom";

function FruitShow({fruits}) {
  const {fruitId} = useParams();
  return (
    <div className='fruit-show'>
      <h2>{fruits[fruitId - 1].name}</h2>
      <p>{fruits[fruitId - 1].color}</p>
      <p>{fruits[fruitId - 1].sweetness}</p>
      <p>{fruits[fruitId - 1].seeds}</p>
    </div>
  )
}

export default FruitShow;
