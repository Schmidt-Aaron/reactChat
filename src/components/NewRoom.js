import React from "react";

class NewRoom extends React.Component {
  render() {
    return (
      <div className="new-room-form">
        <form>
          <input type="text" placeholder="NewRoomForm" required />
          <button id="create-room-form" type="submit">
            +
          </button>
        </form>
      </div>
    );
  }
}

export default NewRoom;
