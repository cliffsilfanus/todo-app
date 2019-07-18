import React from "react";

class InputLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typedText: ""
    };
  }

  handleTyping(e) {
    this.setState({ typedText: e.target.value });
  }

  handleSubmit(e) {
    this.props.submit(this.state.typedText);
    this.setState({ typedText: "" });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="task"
          value={this.state.typedText}
          onChange={e => this.handleTyping(e)}
        />
        <input
          type="submit"
          value="Add todo"
          onClick={e => this.handleSubmit(e)}
        />
      </div>
    );
  }
}

export default InputLine;
