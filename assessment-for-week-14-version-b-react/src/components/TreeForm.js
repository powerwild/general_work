const TYPES = [
  "Deciduous",
  "Evergreen"
];

function TreeForm() {
  return (
    <form
      className="tree-form"
    >
      <h2>Add a Tree</h2>
      <ul className="errors">
      </ul>
      <label>
        Name
        <input
          type="text"
          name="name"
        />
      </label>
      <label>
        Select a Type
        <select
        >
          {TYPES.map(type => (
            <option
              key={type}
            >
              {type}
            </option>
          ))}
        </select>
      </label>
      <label>
        Average Height (in meters)
        <input
          type="number"
          name="avgHeight"
        />
      </label>
      <button
        type="submit"
      >
        Add Tree
      </button>
    </form>
  );
}

export default TreeForm;