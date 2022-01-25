// JSX Combination of HTML, CSS and JS Expressions
import Div from './Div';
import './App.css';


function App() {
  const randomNumber = Math.floor(Math.random() * 100);
  const myName = {
    fName: 'Casey',
    lName: 'Spears'
  }

  return (
    <div className='container'  //style={{color: 'white', backgroundColor: '#581845', height: '1000px'}}
    >
      <h1>My Ugly React App</h1>
      <h2>Ugliest Website Ever</h2>
      <h2>Random Number: {randomNumber}</h2>
      <h2>{myName.fName} {myName.lName}</h2>
      <Div first={myName.fName} />
      {/* <Div></Div> */}
    </div>
  );
}

export default App;
