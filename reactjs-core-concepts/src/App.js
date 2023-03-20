import './App.css';
import logo from './logo.svg';

const h1Style = {
  color: 'rebeccapurple'
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{color: 'rebeccapurple'}}>
          Learning React
        </p>
        <h1 style={h1Style}>Ki Ase Jibone ?</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
