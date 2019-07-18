import React from "react";

class InputLine extends React.Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="task" />
        <input
          type="submit"
          value="Add todo"
          onClick={() => this.props.submit("Test Task")}
        />
      </div>
    );
  }
}

export default InputLine;
