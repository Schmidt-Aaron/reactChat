import React from "react";

class SendMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      message: e.target.value
    });
  }

  render() {
    console.log(this.state.message);
    return (
      <form className="send-message">
        <input
          onChange={this.handleChange}
          value={this.state.message}
          type="text"
          placeholder="Type in your message and hit ENTER"
        />
      </form>
    );
  }
}

export default SendMessage;
