import React, { useState, useEffect } from "react";
import Chat from "../Chat/Chat";
import { database } from "../services/firebase";
import { collection, getDocs } from "firebase/firestore";

function ChatContainer() {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const chatsRef = collection(database, "chats");
    const fetchChat = async () => {
      const snapshot = await getDocs(chatsRef);
      const loadedChats = snapshot.docs.map((valuesChat) => {
        const dataChat = valuesChat.data();
        return {
          name: dataChat.name,
          msg: dataChat.msg,
          timestamp: dataChat.timestamp,
          img: dataChat.img,
        };
      });

      setChats(loadedChats);
    };
    fetchChat();
  }, []);

  return (
    <div className="chatsContainer">
      {chats.map((chatValor) => (
        <Chat
          key={chatValor.name}
          name={chatValor.name}
          msg={chatValor.msg}
          timestamp={chatValor.timestamp}
          img={chatValor.img}
        />
      ))}
    </div>
  );
}

export default ChatContainer;
