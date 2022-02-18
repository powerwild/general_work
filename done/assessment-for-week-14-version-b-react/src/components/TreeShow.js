import { useParams } from "react-router-dom";

function TreeShow({trees}) {
  const { treeId } = useParams();

  return (
    <div className='tree-show'>
      <h2>{trees[treeId - 1].name}</h2>
      <p>{trees[treeId - 1].type}</p>
      <p>{trees[treeId - 1].avgHeight}</p>
    </div>
  )
}

export default TreeShow;
