import { Link } from "react-router-dom";

function TreesIndex({trees}) {


  return (
    <div className='trees-index'>
      <h2>Trees Index</h2>
      {trees.map((tree, i) => {
        return <Link key={i} to={`/trees/${tree.id}`}>{tree.name}</Link>
      })}
    </div>

  );
}

export default TreesIndex;
