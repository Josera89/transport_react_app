import React, { Component } from 'react';
import TodoListItems from './TodoListItems.jsx';
import TodoListForm from './TodoListForm.jsx';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 1, text: 'item 1' },
        { id: 2, text: 'item 2' }
      ]
    };
  }

  addItem(text) {
    const newItem = {
      id: Math.random(),
      text: text
    };
    const newItems = this.state.items.concat(newItem);
    this.setState({
      items: newItems
    });
  }

  render() {
    return (
      <div>
        <TodoListForm addListItem={ this.addItem.bind(this)} />
        <TodoListItems listItems={this.state.items} />
      </div>
    );
  }
}

export default TodoList;
