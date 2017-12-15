import React, { Component } from 'react';

class TodoListForm extends Component{
  render() {
    return (
      <div>
        <input onKeyDown = {(event)  => {
          if (event.key === 'Enter') {
            this.props.addListItem(event.target.value);
            event.target.value = '';
          }
        }} />
      </div>
    );
  }
}

export default TodoListForm;
