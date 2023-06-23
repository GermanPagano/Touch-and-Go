import "./App.css";
import HeaderCom from "./components/header/HeaderCom";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ProfilesCards from "./components/profiles/ProfilesCards";
import { ProfilesCardsContextProvider } from "../src/context/ProfilesCardsContext";

function App() {



  return (
    <div className="App">
      <ProfilesCardsContextProvider>
        <Router>
          <HeaderCom />

         <Routes>
            <Route path="/perfil" element={"tu perfil"} />
            <Route path="/chats" element={"tus chats"} />
            <Route path="/" element={<ProfilesCards/>}/>
          </Routes> 
        </Router>
      </ProfilesCardsContextProvider>
    </div>
  );
}

export default App;
