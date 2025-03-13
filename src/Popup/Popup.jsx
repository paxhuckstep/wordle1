import "./Popup.css";

function Popup({ isOpen, isWin, correctWord, onClick }) {
  const titleText = isWin ? "Congratulations!" : "Oh no! Out of tries :/";
  const bodyText = isWin
    ? `You succeeded! The answer was "${correctWord}".`
    : `Maybe next time!`;
  const buttonText = isWin
    ? "Click here for a new word!"
    : "Click here to try another one.";

  if (!isOpen) {
    return null;
  }

  return (
    <div className="popup">
      <h2 className="popup__title">{titleText}</h2>
      <p className="popup__body">{bodyText}</p>
      <button onClick={onClick} className="popup__button">
        {buttonText}
      </button>
    </div>
  );
}

export default Popup;
