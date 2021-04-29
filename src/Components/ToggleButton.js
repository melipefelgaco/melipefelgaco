import { Brightness2Outlined, WbSunny } from "@material-ui/icons/";

function ToggleButton({ themeColors, toggleTheme }) {
  return (
    <button
      className="toggle-btn"
      style={{
        color: themeColors?.text ?? "black",
        backgroundColor: themeColors?.bg ?? "white",
      }}
      onClick={() => toggleTheme()}
    >
      <WbSunny style={{ color: themeColors?.bg ? "white" : "black" }} />
      <Brightness2Outlined
        style={{ color: themeColors?.bg ? "black" : "white" }}
      />
    </button>
  );
}

export default ToggleButton;
