import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './styles/application.css'

import $ from 'jquery';

//Contact list
import Nav from './Nav.jsx';
import Display from './Display.jsx';

//Todo list
// import TodoList from './TodoList.jsx'

class App extends Component {
  constructor(props) {
    super(props)
    //Set the initial state of the component
    this.state = {contacts: [] }
  }

  componentDidMount() {
    console.log("App Component Did Mount");
    // AJAX and libraries that need access to DOM
    $.get("http://localhost:8000/chuy.json")
    .then((contacts) => {
      //Set state of the component contacts
      //Calls render automatically
      this.setState({contacts: contacts})
    })
    .catch((err) => {
      alert("Could not get contacts");
    })
  }

  render() {
    console.log("App render")
    console.log("state contacts", this.state.contacts)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Transportes</h1>
        </header>
        <div className="wrapper">
          <Nav contacts={this.state.contacts}/>
          <Display />
        </div>
      </div>
    );
  }
}

export default App;
