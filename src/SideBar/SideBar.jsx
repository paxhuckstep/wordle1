import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { fiveLetters, originalPokemon, sixLetters } from "../Utils/constants";
import "./SideBar.css";

function SideBar({ handleToggleSwitchChange }) {
  return (
    <div className="sidebar">
      <h3 className="sidebar__title">Catagories</h3>
      <ToggleSwitch
        toggleTitle={"5 letter words"}
        handleToggleSwitchChange={handleToggleSwitchChange}
        toggleArray={fiveLetters}
      />
      <ToggleSwitch
        toggleTitle={"6 letter words"}
        handleToggleSwitchChange={handleToggleSwitchChange}
        toggleArray={sixLetters}
      />
      <ToggleSwitch
        toggleTitle={"Original 151 pokemon"}
        handleToggleSwitchChange={handleToggleSwitchChange}
        toggleArray={originalPokemon}
      />
    </div>
  );
}

export default SideBar;
