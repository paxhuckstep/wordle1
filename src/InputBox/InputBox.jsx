import "./InputBox.css";

function InputBox({
  letterPosition,
  correctLetter,
  currentInput,
  isActive,
  attemptRow,
  currentAttempt,
  checkedAttempts,
  correctWord,
}) {
  if (isActive) {
    return (
      <div className="box">
        <p className="box__input">{currentInput}</p>
      </div>
    );
  }
  if (currentAttempt > attemptRow) {
    const letter = checkedAttempts[attemptRow - 1].charAt(letterPosition);
    const boxClassName = `box ${
        letter === correctLetter ? "box__input_green" : 
        correctWord.includes(letter) ? "box__input_yellow" : ""
      }`;

    return (
      <div className={boxClassName}>
        <p className="box__input">{letter}</p>
      </div>
    );
  }

  return (
    <div className="box">
      <p className="deleteLater"></p>
    </div>
  );
}

export default InputBox;
