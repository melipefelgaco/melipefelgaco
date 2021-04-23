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
      Toggle theme
    </button>
  );
}

export default ToggleButton;
