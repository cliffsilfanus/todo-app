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

  addTodo(task) {
    // dummyData = [...dummyData, { taskText: task, completed: false }];
    dummyData.push({ taskText: task, completed: false });
    this.setState({ todos: dummyData });
  }

  removeTodo(index) {
    dummyData.splice(index, 1);
    this.setState({ todos: dummyData });
  }

  toggleTodo(index) {
    dummyData[index].completed = !dummyData[index].completed;
    this.setState({ todos: dummyData });
  }

  render() {
    return (
      <React.Fragment>
        <InputLine submit={task => this.addTodo(task)} />
        <TodoList
          todos={this.state.todos}
          todoXClick={index => this.removeTodo(index)}
          toggleTodo={index => this.toggleTodo(index)}
        />
      </React.Fragment>
    );
  }
}

export default TodoApp;
