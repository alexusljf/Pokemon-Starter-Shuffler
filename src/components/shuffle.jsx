import { useState, useEffect } from "react";
import questionMark from "../images/question-mark.png";
import useShuffleEffect from "./useShuffleEffect";
import "./shuffle.css";
import InfoCard from "./infoCard";
import BackgroundMusic from "./backgroundMusic";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PokemonShuffler() {
  const [water, setWater] = useState([questionMark, "?"]);
  const [fire, setFire] = useState([questionMark, "?"]);
  const [grass, setGrass] = useState([questionMark, "?"]);
  const [isShuffling, setIsShuffling] = useState(false);
  const {
    isModalOpen,
    fetchPokemonData,
    displayInfo,
    toggleInfoCard,
    waterStarters,
    fireStarters,
    grassStarters,
    shuffleSound,
  } = useShuffleEffect();
  useEffect(() => {
    if (isShuffling) {
      // randomly change the starters every 25ms
      shuffleSound.play();
      const interval = setInterval(() => {
        setWater(
          waterStarters[Math.floor(Math.random() * waterStarters.length)]
        );
        setFire(fireStarters[Math.floor(Math.random() * fireStarters.length)]);
        setGrass(
          grassStarters[Math.floor(Math.random() * grassStarters.length)]
        );
      }, 25);

      // stop shuffling after 1 second
      setTimeout(() => {
        clearInterval(interval);
        setIsShuffling(false);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isShuffling]);

  return (
    <div className="container">
      <BackgroundMusic />
      <h1>Pokemon Starter Shuffler</h1>
      <h3>Click on the shuffle button to randomise</h3>
      <h3> Click on a Pokemon to learn more!</h3>
      <div className="shuffleContainer">
        <div className="pokemonTrioContainer">
          <img
            src={water[0]}
            alt={water[1]}
            className="pokemonIcon"
            onClick={() => {
              fetchPokemonData(water[1]);
            }}
          />
          <img
            src={fire[0]}
            alt={fire[1]}
            className="pokemonIcon"
            onClick={() => {
              fetchPokemonData(fire[1]);
            }}
          />
          <img
            src={grass[0]}
            alt={grass[1]}
            className="pokemonIcon"
            onClick={() => {
              fetchPokemonData(grass[1]);
            }}
          />
        </div>
        <button
          className="shuffleButton"
          onClick={() => setIsShuffling(true)}
          disabled={isShuffling}
        >
          {isShuffling ? "Shuffling..." : "Shuffle"}
        </button>
      </div>
      {isModalOpen && (
        <InfoCard pokemonData={displayInfo} closeModal={toggleInfoCard} />
      )}
      <a href="https://github.com/alexusljf" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faSquareGithub} className="faicon" />
      </a>
    </div>
  );
}
