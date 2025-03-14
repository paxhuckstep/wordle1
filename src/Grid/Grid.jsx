import InputRow from "../InputRow/InputRow";
import "./Grid.css";

function Grid({ correctWord, currentInputs, currentAttempt, submissions }) {
  const inputAttempts = [1, 2, 3, 4, 5];
  return (
    <div className="grid">
      {inputAttempts.map((attempt) => {
        return (
          <InputRow
            key={attempt}
            correctWord={correctWord}
            attemptRow={attempt}
            currentInputs={currentInputs}
            currentAttempt={currentAttempt}
            submissions={submissions}
          />
        );
      })}
    </div>
  );
}

export default Grid;
