import React, { useState, useEffect } from "react";
import "./conversationStyles.css";
import { Avatar } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
function Conversation() {

  const handleSendMsg = (e) => { e.preventDefault();
    setMesage([...mesage,{msg:input}]);
    setInput('');
}  



  const [input, setInput] = useState("");
  const [mesage, setMesage] = useState([
    {
      name: "maria",
      img: "---",
      msg: "Hola loco",
    },
    { name: "maria", img: "---", msg: "todo bien?" },
    { msg: "aca estoy, perdon" },
  ]);


  return (
    <div className="fullConversation">
      <p className="timestampConversation"> Hicieron Match el 2/07/23 </p>
      {mesage.map((val) =>
        val.name ? (
          <div className="oneMSG">
            <Avatar className="chat_img" src={val.img} alt={val.name} />
            <div className="msgText_received">{val.msg}</div>
          </div>
        ) : (
          <div className="oneMSG">
            <div className="msgText_send">{val.msg}</div>
          </div>
        )
      )}

      <div className="inputChat">
        <input value={ input }  onChange={ e=> setInput(e.target.value)}placeholder="Envia un mensaje.."></input>
        <button onClick={ handleSendMsg }  type="submit" className="btn-send-chat"><SendIcon/></button>
      </div>
    </div>
  );
}

export default Conversation;
