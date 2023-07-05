import React, { useEffect } from "react";
import "./App.css";
import HeaderCom from "./components/header/HeaderCom";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ProfilesCards from "./components/profiles/ProfilesCards";
import { ProfilesCardsContextProvider } from "../src/context/ProfilesCardsContext";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import ChatContainer from './components/ChatsContainer/ChatContainer'

function App() {
  useEffect(() => {
    const targetElement = document.querySelector("#body");

    // Bloquear el desplazamiento del cuerpo
    disableBodyScroll(targetElement);

    // Desbloquear el desplazamiento del cuerpo cuando se desmonte el componente
    return () => {
      enableBodyScroll(targetElement);
      clearAllBodyScrollLocks();
    };
  }, []);
  return (
    <div className="App">
      <ProfilesCardsContextProvider>
        <Router>
          <HeaderCom />
          <Routes>
            <Route path="/perfil" element={"tu perfil"} />
            <Route path="/chats" element={<ChatContainer/>} />
            <Route path="/" element={<ProfilesCards />} />
          </Routes>
        </Router>
      </ProfilesCardsContextProvider>
    </div>
  );
}

export default App;
