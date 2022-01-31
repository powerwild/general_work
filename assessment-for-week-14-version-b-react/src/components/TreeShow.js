

function TreeShow({trees}) {
  const x = 0;
  return (
    <div className='tree-show'>
      <h2>{trees[x].name}</h2>
      <p>{trees[x].type}</p>
      <p>{trees[x].avgHeight}</p>

    </div>
  );
}

export default TreeShow;
