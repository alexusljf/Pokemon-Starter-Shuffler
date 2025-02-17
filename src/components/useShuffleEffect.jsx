import { useState } from "react";
import Squirtle from "../images/squirtle_png.png";
import Totodile from "../images/totodile_png.png";
import Mudkip from "../images/mudkip_png.png";
import Piplup from "../images/piplup_png.png";
import Oshawott from "../images/oshawott_png.png";
import Froakie from "../images/froakie_png.png";
import Popplio from "../images/popplio_png.png";
import Sobble from "../images/sobble_png.png";
import Quaxly from "../images/quaxly_png.png";
import Charmander from "../images/charmander_png.png";
import Cyndaquil from "../images/cyndaquil_png.png";
import Torchic from "../images/torchic_png.png";
import Chimchar from "../images/chimchar_png.png";
import Tepig from "../images/tepig_png.png";
import Fennekin from "../images/fennekin_png.png";
import Litten from "../images/litten_png.png";
import Scorbunny from "../images/scorbunny_png.png";
import Fuecoco from "../images/fuecoco_png.png";
import Bulbasaur from "../images/bulbasaur_png.png";
import Chikorita from "../images/chikorita_png.png";
import Treecko from "../images/treecko_png.png";
import Turtwig from "../images/turtwig_png.png";
import Snivy from "../images/snivy_png.png";
import Chespin from "../images/chespin_png.png";
import Rowlet from "../images/rowlet_png.png";
import Grookey from "../images/grookey_png.png";
import Sprigatito from "../images/sprigatito_png.png";
import cardShuffle from "../sounds/card-shuffle.mp3";

const useShuffleEffect = () => {
  const waterStarters = [
    [Squirtle, "Squirtle"],
    [Totodile, "Totodile"],
    [Mudkip, "Mudkip"],
    [Piplup, "Piplup"],
    [Oshawott, "Oshawott"],
    [Froakie, "Froakie"],
    [Popplio, "Popplio"],
    [Sobble, "Sobble"],
    [Quaxly, "Quaxly"],
  ];

  const fireStarters = [
    [Charmander, "Charmander"],
    [Cyndaquil, "Cyndaquil"],
    [Torchic, "Torchic"],
    [Chimchar, "Chimchar"],
    [Tepig, "Tepig"],
    [Fennekin, "Fennekin"],
    [Litten, "Litten"],
    [Scorbunny, "Scorbunny"],
    [Fuecoco, "Fuecoco"],
  ];

  const grassStarters = [
    [Bulbasaur, "Bulbasaur"],
    [Chikorita, "Chikorita"],
    [Treecko, "Treecko"],
    [Turtwig, "Turtwig"],
    [Snivy, "Snivy"],
    [Chespin, "Chespin"],
    [Rowlet, "Rowlet"],
    [Grookey, "Grookey"],
    [Sprigatito, "Sprigatito"],
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [displayInfo, setDisplayInfo] = useState(null);
  const fetchPokemonData = async (pokemonName) => {
    if (pokemonName === "?") {
      return;
    }
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      if (!response.ok) {
        if (response.status === 404) {
          return new Error("Pokemon not found");
        }
        return new Error("An error occurred while fetching the data");
      }
      const data = await response.json();
      console.log(data);
      setIsModalOpen(true);
      setDisplayInfo(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  const toggleInfoCard = () => {
    setIsModalOpen(!isModalOpen);
  };
  const shuffleSound = new Audio(cardShuffle);
  return {
    fetchPokemonData,
    isModalOpen,
    setIsModalOpen,
    toggleInfoCard,
    displayInfo,
    setDisplayInfo,
    waterStarters,
    fireStarters,
    grassStarters,
    shuffleSound,
  };
};

export default useShuffleEffect;
