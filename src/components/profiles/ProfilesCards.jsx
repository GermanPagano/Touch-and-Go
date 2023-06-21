import React, { useState, useEffect, useRef, useMemo } from "react";
import "./profilesCardsStyles.css";
import TinderCard from "react-tinder-card";
import { database } from "../services/firebase";
import { collection, getDocs } from "firebase/firestore";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { IconButton } from "@mui/material";
import "../buttons/btnsStyles.css";

function ProfilesCards() {
  const [dataMatch, setDataMatch] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastDirection, setLastDirection] = useState();
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(dataMatch.length)
        .fill(0)
        .map((i) => React.createRef()),
    [dataMatch.length]
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  useEffect(() => {
    const perfilesRef = collection(database, "perfiles");

    const fetchData = async () => {
      const snapshot = await getDocs(perfilesRef);
      const perfiles = snapshot.docs.map((elem) => {
        let dataPerfil = elem.data();
        dataPerfil.nombre = elem.data().nombre;
        dataPerfil.url = elem.data().url;
        return dataPerfil;
      });
      setDataMatch([
        ...perfiles.map((e) => ({ nombre: e.nombre, url: e.url })),
      ]);

      setCurrentIndex(perfiles.length - 1);
    };

    fetchData();
  }, []);

  const canGoBack = currentIndex <= dataMatch.length - 1;
  const canSwipe = currentIndex >= 0;

  // set last direction and decrease current index
  const swiped = (direction, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < dataMatch.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
  };

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  return (
    <div className="cards-and-buttons"> 
    <div className="cards-profiles">
      <div className="container-cards">
        {dataMatch.map((p, index) => (
          <TinderCard
            className="swipe"
            key={p.nombre}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, index)}
            onCardLeftScreen={() => outOfFrame(p.nombre, index)}
            ref={childRefs[index]}
          >
            <div
              className="card-tinder"
              style={{ backgroundImage: `url(${p.url})` }}
            >
              <h2>{p.nombre}</h2>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>

    <div className="btnAction">
        <IconButton
          className="btnAction-replay"
          style={{ backgroundColor: !canGoBack && "#c3c4d3" }}
          onClick={() => goBack()}
        >
          <ReplayIcon font="large" />
        </IconButton>

        <IconButton
          className="btnAction-close"
          style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
          onClick={() => swipe("left")}
        >
          <CloseIcon font="large" />
        </IconButton>

        <IconButton className="btnAction-star">
          <StarIcon font="large" />
        </IconButton>

        <IconButton
          className="btnAction-fav"
          style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
          onClick={() => swipe("right")}
        >
          <FavoriteIcon font="large" />
        </IconButton>

        <IconButton className="btnAction-flash">
          <FlashOnIcon font="large" />
        </IconButton>
      </div>

    </div>
  );
}

export default ProfilesCards;
