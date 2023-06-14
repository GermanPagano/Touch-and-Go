import React, { useState, useEffect } from "react";
import "./profilesCardsStyles.css";
import TinderCard from "react-tinder-card";
import { database } from "../services/firebase";
import {  collection, getDocs } from "firebase/firestore";

function ProfilesCards() {
  const [dataMatch, setDataMatch] = useState([]);

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
      setDataMatch(   [...perfiles.map((e) => ({ nombre: e.nombre, url: e.url }))] );
    };

    fetchData();
  }, []);



  return (
    <div className="cards-profiles">
      <div className="container-cards">
        {dataMatch.map((p) => (
          <TinderCard
            className="swipe"
            key={p.nombre}
            preventSwipe={["up", "down"]}
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
  );
}

export default ProfilesCards;
