// JSX Combination of HTML, CSS and JS Expressions
import Div from './Div';
import './App.css';
import List from './List';


function App() {
  const randomNumber = Math.floor(Math.random() * 100);
  const myName = {
    fName: 'Casey',
    lName: 'Spears'
  }
  const fruits = [
    { id: 1, name: 'apple' },
    { id: 2, name: 'kiwi' },
    { id: 3, name: 'pumpkin' },
    { id: 4, name: 'pomegranate' }
  ];

  return (
    <div className='container'  //style={{color: 'white', backgroundColor: '#581845', height: '1000px'}}
    >
      <h1>My Ugly React App</h1>
      <h2>Ugliest Website Ever</h2>
      <List fruits={fruits} />
      {/* <h2>Random Number: {randomNumber}</h2>
      <h2>{myName.fName} {myName.lName}</h2> */}
      <Div first={myName.fName} />
      {/* <Div></Div> */}
    </div>
  );
}

export default App;
