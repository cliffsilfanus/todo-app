import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <input
          type="submit"
          value="X"
          onClick={() => this.props.xClick(this.props.index)}
        />
        <div
          style={{ display: "inline" }}
          onClick={() => this.props.toggleTodo(this.props.index)}
        >
          {this.props.todo.completed ? (
            <strike>{this.props.todo.taskText}</strike>
          ) : (
            this.props.todo.taskText
          )}
        </div>
      </li>
    );
  }
}

export default Todo;
