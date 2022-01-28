import { Link } from "react-router-dom";


function FruitsIndex({fruits}) {

  return (

    <div className='fruits-index'>
      <h2>Fruits Index</h2>
      {fruits.map((fruit) => {
        return <Link to={`/fruits/${fruit.id}`} key={fruit.id} id={fruit.id}>{fruit.name}</Link>
      })}
    </div>

  )
}

export default FruitsIndex;
