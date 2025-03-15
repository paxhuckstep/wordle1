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
    const correctWordGreenless = correctWord
      .split("")
      .filter((letter, index) => {
        return currentInputs[index] !== letter;
      });
    // console.log("correct word greenless: ", correctWordGreenless);

    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const alphabetArray = alphabet.split("");
    let possibleYellowCount = Array(26).fill(0);

    for (let i = 0; i < 26; i++) {
      for (let j = 0; j < correctWordGreenless.length; j++) {
        if (correctWordGreenless[j] === alphabetArray[i]) {
          possibleYellowCount[i]++;
        }
      }
    }
    // console.log("possible yellow count: ", possibleYellowCount);

    const newSubmission = currentInputs.map((letter, index) => {
      let isYellow = false;
      if (
        // !greenTest[index].isGreen &&
        letter !== correctWord.charAt(index) &&
        correctWordGreenless.join("").includes(letter) &&
        possibleYellowCount[alphabetArray.indexOf(letter)] > 0
      ) {
        isYellow = true;
        possibleYellowCount[alphabetArray.indexOf(letter)]--;
      }

      return {
        index: index,
        letter: letter,
        boxClass:
          letter === correctWord.charAt(index) //greenTest[index].isGreen
            ? "box_green"
            : isYellow
            ? "box_yellow"
            : "box_wrong",
      };
    });
    // console.log("new submission: ", newSubmission);

    setSubmissions((prev) => [...prev, newSubmission]);
    setCurrentAttempt((prev) => prev + 1);
    if (currentInputs.join("") === correctWord) {
      setIsOpen(true);
      setIsWin(true);
    }
    setCurrentInputs([]);
  };

  const handleResetButtonClick = () => {
    setCorrectWord(randomWords[Math.floor(Math.random() * randomWords.length)]);
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
        if (isOpen) {
          handleResetButtonClick();
        }

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
  }, [currentInputs, correctWord, isOpen]);

  useEffect(() => {
    setCorrectWord(randomWords[Math.floor(Math.random() * randomWords.length)]);
  }, []);

  return (
    <>
      <div className="app__page">
        <Header
          currentAttempt={currentAttempt}
          onClick={handleResetButtonClick}
        />
        <Grid
          correctWord={correctWord}
          currentInputs={currentInputs}
          currentAttempt={currentAttempt}
          submissions={submissions}
        />
        <div className="delete__later">
          For testing, you can highlight inside the quotes for the answer: "
          <span className="delete__later-span">{correctWord}</span>"{" "}
        </div>
        <Popup
          isOpen={isOpen}
          isWin={isWin}
          correctWord={correctWord}
          onClick={handleResetButtonClick}
        />
      </div>
    </>
  );
}

export default App;
