import React from "react";
import { render } from "react-dom";

let dummyData = ["Todo1", "Todo2", "Todo3"];

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
        <input type="submit" value="X" /> {this.props.todo}
      </li>
    );
  }
}

render(<TodoList />, document.getElementById("root"));
