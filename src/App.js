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
      messages: [],
      joinableRooms: [],
      joinedRooms: []
    };
    this.sendMessage = this.sendMessage.bind(this);
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

        // populate all rooms
        this.currentUser
          .getJoinableRooms()
          .then(joinableRooms => {
            this.setState({
              joinableRooms,
              joinedRooms: this.currentUser.rooms
            });
          })
          .catch(err => `Error fetching rooms: ${err}`);

        // get messages
        this.currentUser.subscribeToRoom({
          roomId: "19380169",
          hooks: {
            onMessage: message => {
              this.setState({
                messages: [...this.state.messages, message]
              });
            }
          },
          messageLimit: 20
        });
      })
      .catch(err => {
        console.log("Error on connection", err);
      });
  }

  sendMessage(text) {
    this.currentUser.sendMessage({
      text,
      roomId: "19380169"
    });
  }

  render() {
    return (
      <main className="app">
        <RoomList
          rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]}
        />
        <MessageList messages={this.state.messages} />
        <NewRoom />
        <SendMessage sendMessage={this.sendMessage} />
      </main>
    );
  }
}

render(<App />, document.getElementById("root"));
