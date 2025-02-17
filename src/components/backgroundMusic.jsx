import { useEffect, useRef } from "react";
import bgmMusic from "../sounds/twinleaf-town-bgm.mp3"; // Adjust the path if needed

const BackgroundMusic = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1; // Set volume to 10%
    }
  }, []);

  return <audio ref={audioRef} src={bgmMusic} autoPlay loop />;
};

export default BackgroundMusic;
