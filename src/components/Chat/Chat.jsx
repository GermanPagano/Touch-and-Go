import React from "react";
import "./Chat_Styless.css";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

function Chat({ name, msg, timestamp, img }) {
  return (
    <Link to={`/chats/${name}`}>
      <div className="chat">
        <Avatar className="chat_img" src={img} alt={name} />
        <div className="chatBody">
          <h3>{name}</h3>
          <p>{msg}</p>
        </div>
        <p className="timestampContainer">{timestamp}</p>
      </div>
    </Link>
  );
}

export default Chat;
