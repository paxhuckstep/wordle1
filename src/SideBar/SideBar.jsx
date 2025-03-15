import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import "./SideBar.css";

function SideBar({}) {
  return (
    <div className="sidebar">
      <h3 className="sidebar__title">Catagories</h3>
      <ToggleSwitch toggleTitle={"5 letter words"} />
      <ToggleSwitch toggleTitle={"6 letter words"} />
      <ToggleSwitch toggleTitle={"Original 151 pokemon"} />
    </div>
  );
}

export default SideBar;
