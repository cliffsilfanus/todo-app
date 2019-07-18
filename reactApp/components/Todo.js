import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <input type="submit" value="X" />
        {this.props.todo.completed ? (
          <strike>{this.props.todo.taskText}</strike>
        ) : (
          this.props.todo.taskText
        )}
      </li>
    );
  }
}

export default Todo;
