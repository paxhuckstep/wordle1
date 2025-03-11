import { useEffect, useState } from "react";
import "./App.css";
import Grid from "./Grid/Grid";
import { randomWords } from "./Utils/constants";
import Header from "./Header/Header";

function App() {
  const [correctWord, setCorrectWord] = useState("");
  const [currentInputs, setCurrentInputs] = useState([]);
  const [currentAttempt, setCurrentAttempt] = useState(1);
  const [checkedAttempts, setCheckedAttempts] = useState([]);

  const testAnswer = () => {
    // console.log("test answer");
    // for (let i = 0; i < currentInputs.length; i++) {
    //   if (currentInputs[i] === correctWord.charAt(i)) {
    //     console.log(currentInputs[i], "is green");
    //   } else if (correctWord.includes(currentInputs[i])) {
    //     console.log(currentInputs[i], "is yellow");
    //   }
    // }
    // console.log(currentInputs.join(""));
    setCheckedAttempts((prev) => [...prev, currentInputs.join("")]);
    setCurrentAttempt((prev) => prev + 1);
    setCurrentInputs([]);
  };

  useEffect(() => {
    console.log(checkedAttempts);
  }, [checkedAttempts]);

  useEffect(() => {
    console.log(currentAttempt);
  }, [currentAttempt]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      console.log("Key pressed:", event.key);
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

      if(event.key.length > 1) {
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

  useEffect(() => {
    console.log(currentInputs);
  }, [currentInputs]);

  return (
    <>
      <Header currentAttempt={currentAttempt} />
      <Grid
        correctWord={correctWord}
        currentInputs={currentInputs}
        currentAttempt={currentAttempt}
        checkedAttempts={checkedAttempts}
      />
      <div className="delete__later">the correct word is {correctWord} </div>
    </>
  );
}

export default App;
