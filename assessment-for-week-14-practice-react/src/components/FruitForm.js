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
  const [color, setColor] = useState(COLORS[0]);
  const [seeds, setSeeds] = useState('yes');
  const [validationErrors, setValidationErrors] = useState([]);
  const [redirectNeeded, setRedirectNeeded] = useState(false);


  useEffect(() => {
    let errors = [];
    if (name.length < 3) errors.push(	"Name must be 3 or more characters");
    if (name.length > 20) errors.push("Name must be 20 characters or less");
    if (fruits.find(fruit => fruit.name === name)) errors.push(	"Name already exists");
    if (sweetness < 1) errors.push('Sweetness must be at least 1');
    if (sweetness > 10) errors.push('Sweetness must be less than a 10');
    setValidationErrors(prevState => prevState = errors);
    // console.log(validationErrors)
  }, [name, sweetness, color, seeds]);



  const handleSubmit = (e) => {
    e.preventDefault();
    const newFruit = {
      name,
      sweetness,
      color,
      seeds
    }
    console.log(newFruit);
    // history.push('/')
    setRedirectNeeded(true);
  }


  return (

      <form
        className="fruit-form"
        onSubmit={handleSubmit}
      >
        <h2>Enter a Fruit</h2>
        {redirectNeeded && <Redirect to='/' />}
        <ul className="errors">
          {validationErrors.length > 0 && validationErrors.map((error, i) => (
            <li key={i}>{error}</li>
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
