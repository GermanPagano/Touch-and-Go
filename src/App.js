import "./App.css";
import HeaderCom from "./components/header/HeaderCom";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ProfilesCards from "./components/profiles/ProfilesCards";

function App() {


  return (
    <div className="App">
      <Router>
        <HeaderCom />

        <Routes>
          <Route path="/perfil" element={"tu perfil"} />
          <Route path="/chats" element={"tus chats"} />
          <Route path="/" element={<ProfilesCards/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
