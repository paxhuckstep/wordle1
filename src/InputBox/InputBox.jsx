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
    const letter = submissions[attemptRow - 1][letterPosition].letter;
    const boxClassName = `box ${submissions[attemptRow -1][letterPosition].color} `;

    return (
      <div className={boxClassName}>
        <p className="box__input">{letter}</p>
      </div>
    );
  }

  return <div className="box"></div>;
}

export default InputBox;
