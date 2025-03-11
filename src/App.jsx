import { useEffect, useState } from "react";
import "./App.css";
import Grid from "./Grid/Grid";
import { randomWords } from "./Utils/constants";
import Header from "./Header/Header";
import Popup from "./Popup/Popup";

function App() {
  const [correctWord, setCorrectWord] = useState("");
  const [currentInputs, setCurrentInputs] = useState([]);
  const [currentAttempt, setCurrentAttempt] = useState(1);
  const [submissions, setSubmissions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isWin, setIsWin] = useState(false);

  const testAnswer = () => {
    setSubmissions((prev) => [...prev, currentInputs.join("")]);
    setCurrentAttempt((prev) => prev + 1);
    if (currentInputs.join("") === correctWord) {
      setIsOpen(true);
      setIsWin(true);
    }
    setCurrentInputs([]);
  };

  const handleResetButtonClick = () => {
    setCorrectWord(
      randomWords[Math.floor(Math.random() * (randomWords.length - 1))]
    );
    setSubmissions([]);
    setIsOpen(false);
    setIsWin(false);
    setCurrentAttempt(1);
    setCurrentInputs([]);
  };

  useEffect(() => {
    if (currentAttempt === 6) {
      setIsOpen(true);
    }
  }, [currentAttempt]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const isLetter = /[a-z]$/i.test(event.key);

      if (event.key == "Backspace") {
        setCurrentInputs((prev) => prev.slice(0, -1));
        return;
      }

      if (event.key == "Enter") {
        if (currentInputs.length === correctWord.length) {
          testAnswer();
        }
        return;
      }

      if (currentInputs.length >= correctWord.length) {
        return;
      }

      if (event.key.length > 1) {
        return;
      }

      if (isLetter) {
        setCurrentInputs((prev) => [...prev, event.key.toLowerCase()]);
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

  return (
    <>
      {" "}
      <div className="app__page">
        <Header currentAttempt={currentAttempt} />
        <Grid
          correctWord={correctWord}
          currentInputs={currentInputs}
          currentAttempt={currentAttempt}
          submissions={submissions}
        />
        <div className="delete__later">the correct word is {correctWord} </div>
        <Popup isOpen={isOpen} isWin={isWin} correctWord={correctWord} onClick={handleResetButtonClick} />
      </div>
    </>
  );
}

export default App;
