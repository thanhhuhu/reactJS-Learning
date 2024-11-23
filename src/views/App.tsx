import React from 'react';
import logo from './logo.svg';
import MyComponent from './Example/MyComponent.js';
import './App.scss';
import ListToDo from "./Todos/ListToDo";

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
          {/*Hello world with Thanh*/}
          Simple to do apps with React.Js (&amp; Thanh)
        </p>
        {/*<a*/}
        {/*  className="App-link"*/}
        {/*  href="https://reactjs.org"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer">*/}
        {/*  Learn React*/}
        {/*</a>*/}
        {/*<MyComponent />*/}
        {/*component này là con của component app*/}
        <ListToDo>

        </ListToDo>
      </header>
    </div>
  );
}

export default App;
