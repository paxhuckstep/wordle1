import "./InputBox.css";

function InputBox({ correctLetter, currentInput, showInputs }) {
  if (showInputs) {
    return (
      <div className="box">
        <p className="box__input">{currentInput}</p>
      </div>
    );
  }
  return (
    <div className="box">
      <p className="deleteLater">{correctLetter}</p>
    </div>
  );
}

export default InputBox;
