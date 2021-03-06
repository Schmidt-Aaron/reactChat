import React from "react";
import ReactDom from "react-dom";
import Message from "./Message";

class MessageList extends React.Component {
  // scrolls to the bottom of the message list
  scrollToBottom() {
    const scrollHeight = this.messageDiv.scrollHeight;
    const height = this.messageDiv.clientHeight;
    const maxScrollTop = scrollHeight - height;
    this.messageDiv.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  }

  // used to toggle auto scroll to bottom depending on where user is in messages
  UNSAFE_componentWillUpdate() {
    if (this.props.roomId) {
      this.shouldScrollToBottom =
        this.messageDiv.scrollTop + this.messageDiv.clientHeight + 100 >=
        this.messageDiv.scrollHeight;
    }
  }

  componentDidUpdate() {
    if (this.props.roomId) {
      if (this.shouldScrollToBottom) {
        this.scrollToBottom();
      }
    }
  }

  render() {
    if (!this.props.roomId) {
      return (
        <div className="message-list">
          <div className="join-room">&larr; Join a room!</div>
        </div>
      );
    }
    return (
      <div
        className="message-list"
        ref={div => {
          this.messageDiv = div;
        }}
      >
        {this.props.messages.map((message, index) => {
          return (
            <Message
              key={index}
              username={message.senderId}
              text={message.text}
            />
          );
        })}
      </div>
    );
  }
}

export default MessageList;
