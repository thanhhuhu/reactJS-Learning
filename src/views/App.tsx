import React from 'react';
import logo from './logo.svg';
import MyComponent from './Example/MyComponent.js';
import './App.scss';

/*
2 components : class component/ function component (function, arrow)
function App {
const App= () => {
*/

function App() {
  //JSX
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world with Thanh
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyComponent />
      </header>
    </div>
  );
}

export default App;
