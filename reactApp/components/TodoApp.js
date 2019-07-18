import React from "react";
import InputLine from "./InputLine";
import TodoList from "./TodoList";

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

export default TodoApp;
