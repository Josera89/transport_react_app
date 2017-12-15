import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './styles/application.css'

//Contact list
import Nav from './Nav.jsx';
import Display from './Display.jsx';

//Todo list
// import TodoList from './TodoList.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Transportes</h1>
        </header>
        <div className="wrapper">
          <Nav />
          <Display />
        </div>
      </div>
    );
  }
}

export default App;
