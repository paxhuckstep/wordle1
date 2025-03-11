import "./Header.css";

function Header({currentAttempt}) {
const attemptsLeft = 6 - currentAttempt;
  return (
    <div className="header">
<h1 className="header__title">Pax's Wordle Thing</h1>
{/* <p className="header__attempts">You have {attemptsLeft} attempts left! </p> */}
<p className="header__attempts">You are on attempt {currentAttempt}</p>
    </div>
  );
}

export default Header;
