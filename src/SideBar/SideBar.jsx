import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import {
  fiveLetters,
  originalPokemon,
  sixLetters,
  stateCapitals,
  usStates,
} from "../Utils/constants";
import "./SideBar.css";

function SideBar({ addCategory, removeCategory }) {
  return (
    <div className="sidebar">
      <h3 className="sidebar__title">Categories</h3>
      <ToggleSwitch
        categoryTitle={"5 letter words"}
        addCategory={addCategory}
        removeCategory={removeCategory}
        categoryArray={fiveLetters}
      />
      <ToggleSwitch
        categoryTitle={"6 letter words"}
        addCategory={addCategory}
        removeCategory={removeCategory}
        categoryArray={sixLetters}
      />
      <ToggleSwitch
        categoryTitle={"Original 151 pokemon"}
        addCategory={addCategory}
        removeCategory={removeCategory}
        categoryArray={originalPokemon}
      />
      <ToggleSwitch
        categoryTitle={"US States"}
        addCategory={addCategory}
        removeCategory={removeCategory}
        categoryArray={usStates}
      />
      <ToggleSwitch
        categoryTitle={"State Capitals"}
        addCategory={addCategory}
        removeCategory={removeCategory}
        categoryArray={stateCapitals}
      />
    </div>
  );
}

export default SideBar;
