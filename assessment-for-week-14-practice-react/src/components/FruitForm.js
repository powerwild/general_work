import useFruitContext from '../context/FavFruitContext';
import { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
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
  const [color, setColor] = useState('red');
  const [sweetness, setSweetness] = useState(1);
  const [seeds, setSeeds] = useState('yes');
  const [validationErrors, setValidationErrors] = useState([]);
  const [redirectNeeded, setRedirectNeeded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({name, color, sweetness, seeds});
    setRedirectNeeded(true);
  }

  useEffect(() => {
    const errors = [];
    if (name.length < 3) errors.push('Name not long enough')
    if (name.length > 20) errors.push('Name too long')
    if (fruits.find(fruit => fruit.name === name) !== undefined) errors.push('Fruit already exists')
    if (sweetness < 1) errors.push('Sweetness must be more than one')
    if (sweetness > 10) errors.push('Sweetness must be less than 11')
    setValidationErrors(errors)
  }, [name, sweetness])

  return (
    <form
      className="fruit-form"
      onSubmit={handleSubmit}
    >
      <h2>Enter a Fruit</h2>
      {redirectNeeded && <Redirect to='/'/>}
      <ul className="errors">
        {validationErrors.map((error, i) => (
          <p key={i}>{error}</p>
        ))}
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
        Select a Color
        <select
        value={color}
        onChange={(e) => setColor(e.target.value)}
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
          value={sweetness}
          onChange={(e) => setSweetness(e.target.value)}
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
