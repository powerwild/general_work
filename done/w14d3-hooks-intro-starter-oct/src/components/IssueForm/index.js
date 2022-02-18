import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import './IssueForm.css';

const IssueForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [level, setLevel] = useState('');
  const [issue, setIssue] = useState('');
  const [issuesArray, setIssuesArray] = useState([]);
  const [validationErrors, setValidationErrors] = useState([]);

  useEffect(()=>{
    const errors = [];
    if(name.length < 2) errors.push('Name must be two or more characters');
    if(!email.includes('@')) errors.push('Enter a valid email');
    if(level === '') errors.push('Please select a priority level');
    if(date === '') errors.push('Please select a date');
    if(!issue.length) errors.push('Please tell us your issue');
    setValidationErrors(errors);
  }, [name, email, issue])

  const handleSubmit = (e)=>{
    e.preventDefault();

    const newIssue = {
      id: nanoid(),
      name,
      email,
      date,
      level,
      issue
    };
    alert('Sent info to the database');
    setIssuesArray((prevIssues) => [...prevIssues, newIssue]);
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setDate('');
    setLevel('');
    setIssue('');
  };

  return (
    <div className='issue-container'>
      <h1>Make A Complaint</h1>

      <form onSubmit={handleSubmit} className='form'>
        {/* Errors Will Go Here */}
        <div className='listErrors'>
          {validationErrors.length > 0 && validationErrors.map(error => (
            <p className='errors' key={error}>*** {error}</p>
          ))}
        </div>
        <div>
          <label htmlFor='name'>
            <input onChange={(event)=> setName(event.target.value)} value={name} id='name' type='text' placeholder='name' />
          </label>
        </div>
        <div>
          <label htmlFor='email'>
            <input onChange={(event)=> setEmail(event.target.value)} value={email} id='email' type='text' placeholder='email' />
          </label>
        </div>
        <div>
          <label htmlFor='level'>
            <select onChange={(event)=> setLevel(event.target.value)} value={level} name='level'>
              <option value=''>Select</option>
              <option value='urgent'>Urgent</option>
              <option value='not urgent'>Not Urgent</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor='date'>
            <input onChange={(event)=> setDate(event.target.value)} value={date} id='date' type='date' placeholder='dd/mm/yyyy' />
          </label>
        </div>
        <div>
          <label htmlFor='issue'>
            <br />
            <textarea
              id='issue'
              rows='10'
              cols='50'
              placeholder='enter your issue'
              onChange={(event)=> setIssue(event.target.value)}
              value={issue}
            ></textarea>
          </label>
        </div>

        <button type='submit'>Submit</button>
      </form>

      <hr />
      <h1>List of Issues:</h1>
    </div>
  );
};

export default IssueForm;
