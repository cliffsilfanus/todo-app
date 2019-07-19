import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.todos.map((todo, step) => (
          <Todo
            index={step}
            todo={todo}
            xClick={index => this.props.todoXClick(index)}
            toggleTodo={index => this.props.toggleTodo(index)}
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;
