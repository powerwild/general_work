

function TreeShow({trees}) {
  return (
    <div className='tree-show'>
      <h2>{trees[0].name}</h2>
      <p>{trees[0].type}</p>
      <p>{trees[0].avgHeight}</p>
    </div>
  );
}

export default TreeShow;
