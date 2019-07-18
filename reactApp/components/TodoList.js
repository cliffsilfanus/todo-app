import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.todos.map(todo => (
          <Todo todo={todo} />
        ))}
      </ul>
    );
  }
}

export default TodoList;
