import React from "react";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { IconButton } from "@mui/material";
import './btnsStyles.css';


function ButtonsAction() {


    const handleRestore = () => {
       console.log('retroceder' )
    }

    const handleClose = () => {
        console.log('rechazar')
     }
 

  return (
    <div className="btnAction">

      <IconButton className="btnAction-replay pressable" onClick={ handleRestore }>
        <ReplayIcon font="large"  />
        </IconButton>

        <IconButton className="btnAction-close" onClick={ handleClose }>
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
