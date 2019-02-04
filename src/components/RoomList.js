import React from "react";

class RoomList extends React.Component {
  render() {
    return (
      <div className="room-list">
        <h3>Your Rooms</h3>
        <ul>
          {this.props.rooms.map(room => {
            return (
              <li key={room.id} className="room">
                <a href="#" title={room.name}>
                  # {room.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default RoomList;
