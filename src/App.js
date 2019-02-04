import React from "react";
import { render } from "react-dom";
import { ChatManager, TokenProvider } from "@pusher/chatkit-client";
import RoomList from "./components/RoomList";
import MessageList from "./components/MessageList";
import NewRoom from "./components/NewRoom";
import SendMessage from "./components/SendMessage";

class App extends React.Component {
  render() {
    return (
      <main className="app">
        <RoomList />
        <MessageList />
        <NewRoom />
        <SendMessage />
      </main>
    );
  }
}

render(<App />, document.getElementById("root"));
