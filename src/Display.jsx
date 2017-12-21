import React, { Component } from 'react';
// import Item from './Item.jsx';
import Male from './images/male.png';

class Display extends Component {
  componentDidMount() {
    console.log("Display componentDidMount")
  }

  render() {
    console.log("Display render")
    return (
       <main className="main">
        <div className="card">
          <div className="card-content">
            <span className="card-title">Chuy Ortiz</span>
            <img className="circle contact-image" src={Male}></img>
            <p>chuyortiz@gmail.com</p>
          </div>
          <div className="card-action">
            <a href="#">Delete</a>
          </div>
        </div>
      </main>
    );
  }
}
export default Display;
