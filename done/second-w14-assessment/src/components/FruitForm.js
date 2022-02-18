import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

const COLORS = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple"
];



function FruitForm({ fruits }) {
  const [name, setName] = useState('');
  const [sweetness, setSweetness] = useState(1);
  const [color, setColor] = useState('red');
  const [seeds, setSeeds] = useState('yes');
  const [validationErrors, setValidationErrors] = useState([]);
  const [redirectNeeded, setRedirectNeeded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({name, sweetness, color, seeds})
    setRedirectNeeded(true);
  }
  useEffect(() => {
    const errors = [];
    if (name.length < 3) errors.push('Name must be at least 3 characters')
    if (name.length > 20) errors.push('Name must be 20 or less characters')
    if (fruits.find(fruit => fruit.name === name) !== undefined) errors.push('Fruit already exists')
    if (sweetness < 1) errors.push('Sweetness must be at least 1')
    if (sweetness > 10) errors.push('Sweetness can not be more than 10')
    setValidationErrors(errors);

  }, [name, sweetness, color, seeds])

  return (
    <form
      className="fruit-form"
      onSubmit={handleSubmit}
    >
      <h2>Enter a Fruit</h2>
      {redirectNeeded && <Redirect to='/' /> }
      <ul className="errors">
        {validationErrors.map((error, i) => (
          <li key={i}>{error}</li>
        ))}
      </ul>
      <label>
        Name
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </label>
      <label>
        Select a Color
        <select
        onChange={(e) => setColor(e.target.value)}
        value={color}
        >
          {COLORS.map(color => (
            <option
              key={color}
              value={color}
            >
              {color}
            </option>
          ))}
        </select>
      </label>
      <label>
        Sweetness
        <input
          type="number"
          name="sweetness"
          onChange={(e) => setSweetness(e.target.value)}
          value={sweetness}
        />
      </label>
      <label>
        <input
          type="radio"
          value="no"
          name="seeds"
          checked={seeds === 'no'}
          onChange={(e) => setSeeds(e.target.value)}
        />
        No Seeds
      </label>
      <label>
        <input
          type="radio"
          value="yes"
          name="seeds"
          checked={seeds === 'yes'}
          onChange={(e) => setSeeds(e.target.value)}
        />
        Seeds
      </label>
      <button
        type="submit"
        disabled={validationErrors.length > 0}
      >
        Submit Fruit
      </button>
    </form>
  );
}

export default FruitForm;
