import { useEffect, useState } from "react";
import "./App.css";
import Grid from "./Grid/Grid";
import { randomWords } from "./Utils/constants";
import Header from "./Header/Header";

function App() {
  const [correctWord, setCorrectWord] = useState("");
  const [currentInputs, setCurrentInputs] = useState([]);
  const [currentAttempt, setCurrentAttempt] = useState(1);

  useEffect(() => {
    const handleKeyDown = (event) => {
      console.log("Key pressed:", event.key);
      const isLetter = /[a-z]$/i.test(event.key);

      if (event.key === "Backspace") {
        setCurrentInputs(prev => prev.slice(0, -1));
        return;
      }

      if (event.key === "Enter") {
        if (currentInputs.length === correctWord.length) {
          //test answer
          console.log("test answer");
        }
        return;
      }

      if (currentInputs.length === correctWord.length) {
        return;
      }

      if (isLetter) {
        setCurrentInputs(prev => [...prev, event.key]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentInputs, correctWord]);

  useEffect(() => {
    setCorrectWord(
      randomWords[Math.floor(Math.random() * (randomWords.length - 1))]
    );
  }, []);

  useEffect(() => {
    console.log(currentInputs);
  }, [currentInputs]);

  return (
    <>
    <Header currentAttempt={currentAttempt} />
      <Grid correctWord={correctWord} currentInputs={currentInputs} currentAttempt={currentAttempt} />
      <div className="deleteLater">the correct word is {correctWord} </div>
    </>
  );
}

export default App;
