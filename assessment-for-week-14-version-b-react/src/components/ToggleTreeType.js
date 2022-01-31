const ToggleTreeType = () => {
  return (
    <div className="toggle-tree-type">
      <h2>Deciduous or Evergreen?</h2>
      <label>
        <input
          type="radio"
          value="1"
          name="treeTypeId"
        />
        Deciduous
      </label>
      <label>
        <input
          type="radio"
          value="2"
          name="treeTypeId"
        />
        Evergreen
      </label>
    </div>
  );
}

export default ToggleTreeType;