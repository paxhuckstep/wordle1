import "./InputRow.css";
import InputBox from "../InputBox/InputBox";

function InputRow({ correctWord, attemptRow, currentInputs, currentAttempt, checkedAttempts }) {
  const correctWordSplit = correctWord.split("");
  
  const isActive = currentAttempt === attemptRow;
  return (
    <div className="input-row">
      <p className="deleteLater">
        Attempt Row: {attemptRow} ----- isActive: {isActive.toString()}
      </p>
      {correctWordSplit.map((correctLetter, index) => {
        return (
          <InputBox
            key={index}
            letterPosition={index}
            correctLetter={correctLetter}
            currentInput={currentInputs[index]}
            isActive={isActive}
            attemptRow={attemptRow}
            currentAttempt={currentAttempt}
            checkedAttempts={checkedAttempts}
            correctWord={correctWord}
          />
        );
      })}
    </div>
  );
}

export default InputRow;
