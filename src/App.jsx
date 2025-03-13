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
    const newSubmissionGreenTest = currentInputs.map((letter, index) => {
      return {
        index: index,
        letter: letter,
        color: correctWord.charAt(index) === letter ? "green" : "not-green",
      };
    });
    console.log("newSubmissionGreenTest: ", newSubmissionGreenTest);
    // const newSubmissionGreens = newSubmissionGreenTest.filter((letterObject) => {
    //   return letterObject.color === "green";
    // });
    // console.log(newSubmissionGreens);

    const correctWordGreenless = correctWord
      .split("")
      .filter((letter, index) => {
        return newSubmissionGreenTest[index].color !== "green";
      });

    console.log("correct word greenless: ", correctWordGreenless);
    // console.log("currentInputs: ", currentInputs);

    // const WRONGnewSubmissionYellowTest = newSubmissionGreenTest.map((letter, index) => {
    //   return {
    //     index: index,
    //     letter: letter.letter,
    //     color: letter.color === "green" ? "green" : correctWordGreenless.join("").includes(currentInputs[index]) ? "yellow" : "wrong"
    //   }
    // })

    // console.log("WRONGnewSubmissionYellowTest: ", WRONGnewSubmissionYellowTest)

    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const alphabetArray = alphabet.split("");
    let possibleYellowCount = Array(26).fill(0);

    for (let i = 0; i < 26; i++) {
      for (let j = 0; j < correctWordGreenless.length; j++) {
        if (correctWordGreenless[j] === alphabetArray[i]) {
          possibleYellowCount[i] = possibleYellowCount[i] + 1;
        }
      }
    }

    console.log("possibleYellowCount: ", possibleYellowCount);

    const newSubmissionYellowTest = newSubmissionGreenTest.map(
      (letter, index) => {
        let isYellow = false;

        for (let i = 0; i < 26; i++) {
          if (
            correctWordGreenless.join("").includes(letter.letter) &&
            possibleYellowCount[i] > 0
          ) {
            isYellow = true;
            possibleYellowCount[i] = possibleYellowCount[i] -1;
          }
        }

        console.log("isYellow: ", isYellow);
        return {
          index: index,
          letter: letter.letter,
          color:
            letter.color === "green" ? "green" : isYellow ? "yellow" : "wrong",
        };
      }
    );

    console.log("newSubmissionYellowTest: ", newSubmissionYellowTest);

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
      <div className="app__page">
        <Header currentAttempt={currentAttempt} />
        <Grid
          correctWord={correctWord}
          currentInputs={currentInputs}
          currentAttempt={currentAttempt}
          submissions={submissions}
        />
        <div className="delete__later">
          For testing, you can highlight in the quotes for the answer: "
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
