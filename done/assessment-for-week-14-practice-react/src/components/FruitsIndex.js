import { Link } from "react-router-dom";



function FruitsIndex({fruits}) {
  return (
    <div className='fruits-index'>
      <h2>Fruits Index</h2>
      {fruits.map((fruit, i) => (
        <Link to={`/fruits/${fruit.id}`} key={i}>{fruit.name}</Link>
      ))}
    </div>
  );
}

export default FruitsIndex;
