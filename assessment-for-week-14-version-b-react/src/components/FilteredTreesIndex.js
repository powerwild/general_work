import TreesIndex from './TreesIndex.js';
import { useTreeContext } from '../context/TreeTypeContext.js';
import { Link } from 'react-router-dom';

const FilteredTreesIndex = ({trees}) => {
  const { treeTypeId, treeType } = useTreeContext();
  const typeArray = trees.filter(tree => tree.type === treeType);

  return (
    <>
      <h2>{treeType}</h2>
      <TreesIndex trees={typeArray}/>
    </>
  );
}

export default FilteredTreesIndex;
