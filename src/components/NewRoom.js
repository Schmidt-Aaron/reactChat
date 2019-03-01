import React from "react";

class NewRoom extends React.Component {
  constructor() {
    super();
    this.state = {
      roomName: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      roomName: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createRoom(this.state.roomName);
    this.setState({
      roomName: ""
    });
  }

  render() {
    return (
      <div className="new-room-form">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.roomName}
            onChange={this.handleChange}
            placeholder="Create a New Room"
            required
          />
          <button id="create-room-form" type="submit">
            +
          </button>
        </form>
      </div>
    );
  }
}

export default NewRoom;
