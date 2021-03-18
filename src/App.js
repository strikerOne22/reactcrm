import logo from './logo.svg';
import './App.css';
import Menu from './Paginas/Menu/';

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h4>striker.one22@gmail.com</h4>
        <p>
          Josué David Hernández Flores
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
