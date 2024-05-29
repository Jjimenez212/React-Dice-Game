import Gameplay from "./components/Gameplay";
import StartGame from "./components/StartGame";
import { useState } from "react";

export function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };
  return (
    <>{isGameStarted ? <Gameplay /> : <StartGame toggle={toggleGamePlay} />}</>
  );
}
