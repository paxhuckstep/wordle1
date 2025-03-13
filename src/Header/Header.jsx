import "./Header.css";

function Header({ currentAttempt, onClick }) {
  const attemptsLeft = 6 - currentAttempt;
  return (
    <div className="header">
      <h1 className="header__title">Pax's Wordle Thing</h1>
      <div className="header__right-container">
      <p className="header__attempts">
        You have {attemptsLeft} attempts left!
      </p>
      <button onClick={onClick} className="header__reset-button">New word</button>
      </div>
    </div>
  );
}

export default Header;
