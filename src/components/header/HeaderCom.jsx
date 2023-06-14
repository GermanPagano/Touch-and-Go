import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import logo from "../../assets/logo.png";
import "./header.css";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

function HeaderCom() {
  return (
    <div className="header">
          <Link to="/perfil">
      <IconButton>
        <PersonIcon className="header-icon" fontSize="large" />
      </IconButton>
      </Link>
      <Link to="/">
        <img src={logo} className="header-logo" alt="logo" />
      </Link>
      <Link to="/chats">
        <IconButton>
          <ForumIcon className="header-icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
}

export default HeaderCom;
