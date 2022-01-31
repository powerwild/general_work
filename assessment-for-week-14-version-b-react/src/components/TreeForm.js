import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

const TYPES = [
  "Deciduous",
  "Evergreen"
];

function TreeForm({trees}) {
  const [name, setName] = useState('');
  const [avgTreeHeight, setAvgTreeHeight] = useState(1);
  const [newTreeType, setNewTreeType] = useState('Deciduous');
  const [validationErrors, setValidationErrors] = useState([]);
  const [redirectNeeded, setRedirectNeeded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({name, avgHeight: avgTreeHeight, type: newTreeType})
    setRedirectNeeded(true);
  }

  useEffect(() => {
    const errors = [];
    if (name.length < 1) errors.push('New trees require a name')
    if (name.length > 50) errors.push('Tree names cannot be more than 50 characters')
    if (avgTreeHeight < 1) errors.push('Tree height must be more than 1')
    if (avgTreeHeight > 500) errors.push('Trees cannot be more than 500 feet tall')
    setValidationErrors(errors)
  }, [name, avgTreeHeight])

  return (
    <form
      className="tree-form"
      onSubmit={handleSubmit}
    >
      <h2>Add a Tree</h2>
      {redirectNeeded && <Redirect to='/trees' />}
      <ul className="errors">
        {validationErrors.map((error, i) => {
          return <li key={i}>{error}</li>
        })}
      </ul>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Select a Type
        <select
        value={newTreeType}
        onChange={(e) => setNewTreeType(e.target.value)}
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
          value={avgTreeHeight}
          onChange={(e) => setAvgTreeHeight(e.target.value)}
        />
      </label>
      <button
        type="submit"
        disabled={validationErrors.length > 0}
      >
        Add Tree
      </button>
    </form>
  );
}

export default TreeForm;
