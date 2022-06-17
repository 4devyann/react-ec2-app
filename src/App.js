import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React app running at Lightsale</p>
        <a
          className="App-link"
          href="https://aws.amazon.com/pt/lightsail/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lightsale
        </a>
      </header>
    </div>
  );
}

export default App;
