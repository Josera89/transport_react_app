import React, {Component} from 'react';
import Item from './Item.jsx';

class Nav extends Component {
  render() {
    return (
      <aside className="left-sidebar">
      <ul className="collection">
        <Item />
      </ul>
      </aside>
    );
  }
}

export default Nav;
