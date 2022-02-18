import { createContext, useState, useContext } from 'react';

const TYPES = {
  1: 'Deciduous',
  2: 'Evergreen'
};

export const TreeTypeContext = createContext();
export const useTreeContext = () => useContext(TreeTypeContext);

export default function TreeTypeProvider(props) {
  const [treeTypeId, setTreeTypeId] = useState("1");

  return (
    <TreeTypeContext.Provider
      value={{
        treeTypeId,
        setTreeTypeId,
        treeType: TYPES[treeTypeId],
      }}
    >
      {props.children}
    </TreeTypeContext.Provider>
  )
}
