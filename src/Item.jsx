import React, {Component} from 'react';

class Item extends Component {
  componentDidMount() {
    console.log("Item componentDidMount")
  }

  showEmail() {
    alert("The email is " + this.props.email)
  }

  render() {
    console.log("Item render")
    return (
      <li
        onClick={this.showEmail.bind(this)}
        className="collection-item">{this.props.name}</li>
    );
  }
}
export default Item;
