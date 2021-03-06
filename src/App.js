import React from "react";
import { render } from "react-dom";
import { ChatManager, TokenProvider } from "@pusher/chatkit-client";
import RoomList from "./components/RoomList";
import MessageList from "./components/MessageList";
import NewRoom from "./components/NewRoom";
import SendMessage from "./components/SendMessage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomId: null,
      messages: [],
      joinableRooms: [],
      joinedRooms: []
    };
    this.sendMessage = this.sendMessage.bind(this);
    this.subscribeToRoom = this.subscribeToRoom.bind(this);
    this.getRooms = this.getRooms.bind(this);
    this.createRoom = this.createRoom.bind(this);
  }

  componentDidMount() {
    const chatManager = new ChatManager({
      instanceLocator: process.env.INSTANCE,
      userId: "aaron",
      tokenProvider: new TokenProvider({ url: process.env.TEST_TOKEN })
    });

    chatManager
      .connect()
      .then(currentUser => {
        console.log("Successful Connection", currentUser);
        this.currentUser = currentUser;

        this.getRooms();
        this.subscribeToRoom();
      })
      .catch(err => {
        console.log("Error on connection", err);
      });
  }

  // populate current rooms
  getRooms() {
    this.currentUser
      .getJoinableRooms()
      .then(joinableRooms => {
        this.setState({
          joinableRooms,
          joinedRooms: this.currentUser.rooms
        });
      })
      .catch(err => `Error fetching rooms: ${err}`);
  }

  // get messages from a room
  subscribeToRoom(roomId) {
    // clear messages
    this.setState({
      messages: []
    });
    this.currentUser
      .subscribeToRoom({
        roomId,
        hooks: {
          onMessage: message => {
            this.setState({
              messages: [...this.state.messages, message]
            });
          }
        },
        messageLimit: 20
      })
      .then(room => {
        this.setState({
          roomId: room.id
        });
        this.getRooms();
      });
  }

  // send a message
  sendMessage(text) {
    this.currentUser.sendMessage({
      text,
      roomId: this.state.roomId
    });
  }

  // create a new room
  createRoom(name) {
    this.currentUser
      .createRoom({
        name
      })
      .then(room => this.subscribeToRoom(room.id))
      .catch(err => `error with createRoom ${err}`);
  }

  render() {
    return (
      <main className="app">
        <RoomList
          roomId={this.state.roomId}
          rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]}
          subscribe={this.subscribeToRoom}
        />
        <MessageList
          messages={this.state.messages}
          roomId={this.state.roomId}
        />
        <NewRoom createRoom={this.createRoom} />
        <SendMessage
          sendMessage={this.sendMessage}
          disabled={!this.state.roomId}
        />
      </main>
    );
  }
}

render(<App />, document.getElementById("root"));
