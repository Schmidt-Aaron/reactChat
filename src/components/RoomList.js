import React from "react";

class RoomList extends React.Component {
  render() {
    return (
      <div className="rooms">
        <p>Current Joined Rooms</p>
        <ul className="room-list">
          {this.props.rooms.map((room, index) => {
            return (
              <li key={index} className="room-title">
                {room.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default RoomList;
