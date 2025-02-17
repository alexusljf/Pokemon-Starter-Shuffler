import React, { useState } from "react";
import "./infoCard.css";
import levelUp from "../sounds/levelup.mp3";

const InfoCard = ({ pokemonData, closeModal }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  if (!pokemonData) return null;

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">
          {capitalizeFirstLetter(pokemonData.name)}
        </h2>
        <img
          className="pokemon-image"
          src={pokemonData.sprites?.front_default}
          alt={pokemonData.name}
          onLoad={() => setImageLoaded(true)} // Set loading to false when image loads
          style={{ display: imageLoaded ? "block" : "none" }} // Hide image until loaded
        />
        <div className="modal-info">
          <p>
            <strong>Height:</strong> {pokemonData.height / 10} m
          </p>
          <p>
            <strong>Weight:</strong> {pokemonData.weight / 10} kg
          </p>
        </div>
        <div className="buttonDiv">
          <button
            className="play-cry-button"
            onClick={() => {
              const audio = new Audio(pokemonData.cries?.latest);
              audio.play();
              audio.volume = 0.2;
            }}
          >
            Play Cry
          </button>
          <button
            className="play-cry-button"
            onClick={() => {
              const audio = new Audio(levelUp);
              audio.play();
              audio.volume = 0.3;
              closeModal();
            }}
          >
            Select {capitalizeFirstLetter(pokemonData.name)}?
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
