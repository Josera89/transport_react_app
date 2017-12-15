import React, {Component} from 'react';

class TodoListItems extends Component {
  render() {
    const lis = this.props.listItems.map((item) => {
      return <li key={item.id}>{item.text}</li>
    });
    return (
      <ol>
        {lis}
      </ol>
    );
  }
}

export default TodoListItems;
