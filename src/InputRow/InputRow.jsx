import "./InputRow.css";
import InputBox from "../InputBox/InputBox";

function InputRow({ correctWord, attemptRow, currentInputs, currentAttempt }) {
  const correctWordSplit = correctWord.split("");
  const showInputs = currentAttempt === attemptRow;
  return (
    <div className="input-row">
      <p className="deleteLater">
        {attemptRow} {showInputs.toString()}
      </p>
      {correctWordSplit.map((correctLetter, index) => {
        return (
          <InputBox
            key={index}
            correctLetter={correctLetter}
            currentInput={currentInputs[index]}
            showInputs={showInputs}
          />
        );
      })}
    </div>
  );
}

export default InputRow;
