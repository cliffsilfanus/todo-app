import React from "react";
import { render } from "react-dom";

let dummyData = [
  { taskText: "This task done", completed: true },
  { taskText: "This task not done", completed: false },
  { taskText: "This task not done too", completed: false }
];

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    this.setState({ todos: dummyData });
  }

  render() {
    return (
      <React.Fragment>
        <InputLine />
        <TodoList todos={this.state.todos} />
      </React.Fragment>
    );
  }
}

class InputLine extends React.Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="task" />
        <input type="submit" value="Add todo" />
      </div>
    );
  }
}

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

render(<TodoApp />, document.getElementById("root"));
