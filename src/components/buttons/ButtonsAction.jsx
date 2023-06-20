import React from "react";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { IconButton } from "@mui/material";
import './btnsStyles.css';


function ButtonsAction() {
  return (
    <div className="btnAction">
      <IconButton className="btnAction-replay">
        <ReplayIcon font="large" />
        </IconButton>

        <IconButton className="btnAction-close">
        <CloseIcon font="large" />
        </IconButton>

        <IconButton className="btnAction-star">
        <StarIcon font="large" />
        </IconButton>

        <IconButton className="btnAction-fav">
        <FavoriteIcon font="large" />
        </IconButton>

        <IconButton className="btnAction-flash">
        <FlashOnIcon font="large" />
        </IconButton>

    </div>
  );
}

export default ButtonsAction;
