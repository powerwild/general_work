import { useTreeContext } from "../context/TreeTypeContext";

const ToggleTreeType = () => {
  const { treeTypeId, setTreeTypeId, treeType } = useTreeContext();

  return (
    <div className="toggle-tree-type">
      <h2>Deciduous or Evergreen?</h2>
      <label>
        <input
          type="radio"
          value="1"
          name="treeTypeId"
          checked={treeType === 'Deciduous'}
          onChange={(e) => setTreeTypeId(e.target.value)}
        />
        Deciduous
      </label>
      <label>
        <input
          type="radio"
          value="2"
          name="treeTypeId"
          checked={treeType === 'Evergreen'}
          onChange={(e) => setTreeTypeId(e.target.value)}
        />
        Evergreen
      </label>
    </div>
  );
}

export default ToggleTreeType;
