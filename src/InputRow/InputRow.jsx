import "./InputRow.css";
import InputBox from "../InputBox/InputBox";

function InputRow({ correctWord, attemptRow, currentInputs, currentAttempt, submissions }) {
  const correctWordSplit = correctWord.split("");
  
  const isActive = currentAttempt === attemptRow;
  return (
    <div className="input-row">
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
            submissions={submissions}
            correctWord={correctWord}
          />
        );
      })}
    </div>
  );
}

export default InputRow;
