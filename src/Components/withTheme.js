import React from "react";

const themes = {
  light: {
    width:"200px",
    backgroundColor: "#ffffff",
    color: "#333",
    border: "1px solid #ddd",
    padding: "2px",
    borderRadius: "8px"
  },
  dark: {
    width:"200px",
    backgroundColor: "#1e1e1e",
    color: "#fff",
    border: "1px solid #444",
    padding: "1rem",
    borderRadius: "8px"
  }
};

function withTheme(WrappedComponent, theme = "light") {
  return function ThemedComponent(props) {
    const style = themes[theme] || themes.light;

    return (
      <div style={style}>
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default withTheme;
