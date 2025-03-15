import "./ToggleSwitch.css";

function ToggleSwitch({ toggleTitle, handleToggleSwitchChange, toggleArray }) {
  const onChange = () => handleToggleSwitchChange(toggleArray);

  return (
    <>
      <p className="toggle-switch__title">{toggleTitle}</p>
      <label className="toggle-switch__switch">
        <input
          onChange={onChange}
          type="checkbox"
          className="toggle-switch__checkbox"
        />
        <span className="toggle-switch__circle"></span>
        <span className="toggle-switch__text toggle-switch__text_F">N</span>
        <span className="toggle-switch__text toggle-switch__text_C">Y</span>
      </label>
    </>
  );
}

export default ToggleSwitch;
