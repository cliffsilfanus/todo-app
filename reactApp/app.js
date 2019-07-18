import React from "react";
import { render } from "react-dom";

let dummyData = [ 
    { taskText: "This task done", completed: true }, 
    { taskText: "This task not done", completed: false }, 
    { taskText: "This task not done too", completed: false}
];

class TodoApp extends React.Component {
  render() {
    return (
      <React.Fragment>
        <InputLine />
        <TodoList />
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
  render() {
    return (
      <ul>
        {dummyData.map(todo => (
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
        {this.props.todo.completed ? <strike>{this.props.todo.taskText}</strike> : this.props.todo.taskText }
      </li>
    );
  }
}

render(<TodoApp />, document.getElementById("root"));
