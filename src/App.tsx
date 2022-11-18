import reactLogo from './assets/react.svg';
import './App.css';

function App (): JSX.Element {
  return (
    <div className="App">
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
    </div>
  );
}

export default App;
