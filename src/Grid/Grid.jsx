import InputRow from "../InputRow/InputRow";
import "./Grid.css";

function Grid({
  isGrid,
  correctWord,
  currentInputs,
  currentAttempt,
  submissions,
}) {
  const inputAttempts = [1, 2, 3, 4, 5];

  if (!isGrid) {
    return (
      <div className="grid">
        <p className="grid__notice">
          To get started, select some catagories on the left,  then click "New word" at the top right corner.
        </p>
      </div>
    );
  }

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
