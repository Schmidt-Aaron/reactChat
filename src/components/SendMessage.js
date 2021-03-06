import React from "react";

class SendMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      message: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.sendMessage(this.state.message);
    this.setState({
      message: ""
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="send-message">
        <input
          disabled={this.props.disabled}
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
