import React, { useState } from "react";
import { Avatar } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import "./conversationStyles.css";

function Conversation() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "maria",
      img: "---",
      msg: "Hola loco",
    },
    { name: "maria", img: "---", msg: "todo bien?" },
    { msg: "aca estoy, perdon" },
  ]);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSendMsg = (event) => {
    event.preventDefault();
    if (input.trim() !== "") {
      setMessages([
        ...messages,
        { msg: input },
      ]);
      setInput("");
    }
  };

  return (
    <div className="fullConversation">
      <p className="timestampConversation">Hicieron Match el 2/07/23</p>
      {messages.map((message, index) => (
        <div className="oneMSG" key={index}>
          {message.name ? (
            <>
              <Avatar
                className="chat_img"
                src={message.img}
                alt={message.name}
              />
              <div className="msgText_received">{message.msg}</div>
            </>
          ) : (
            <div className="msgText_send">{message.msg}</div>
          )}
        </div>
      ))}
      <div className="inputChat">
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Envia un mensaje..."
        />
        <button
          onClick={handleSendMsg}
          type="submit"
          className="btn-send-chat"
          disabled={input.trim() === ""}
        >
          <SendIcon />
        </button>
      </div>
    </div>
  );
}

export default Conversation;
