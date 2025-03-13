import "./InputBox.css";

function InputBox({
  letterPosition,
  correctLetter,
  currentInput,
  isActive,
  attemptRow,
  currentAttempt,
  submissions,
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
    const letter = submissions[attemptRow - 1].charAt(letterPosition);
    const boxClassName = `box ${
      letter === correctLetter
        ? "box_green"
        : correctWord.includes(letter)
        ? "box_yellow"
        : "box_wrong"
    }`;

    return (
      <div className={boxClassName}>
        <p className="box__input">{letter}</p>
      </div>
    );
  }

  return <div className="box"></div>;
}

export default InputBox;
