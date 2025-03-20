import "./Header.css";

function Header({ currentAttempt, handleNewWord, remainingLetters }) {
  const attemptsLeft = 6 - currentAttempt;
  return (
    <div className="header">
      <h1 className="header__title">Pax's Wordle Thing</h1>
      <div className="header__right-container">
      <p className="header__attempts">
        You have {attemptsLeft} attempts left!
      </p>
      <button onClick={handleNewWord} className="header__reset-button">New word</button>
      <p className="header__letters-title">Unused letters:</p>
      <p className="header__letters">{remainingLetters}</p>
      </div>
    </div>
  );
}

export default Header;
