import React from "react";
import ThemedMessage from "./ThemedMessage";
import withTheme from "./withTheme";

const LightMessage = withTheme(ThemedMessage, "light");
const DarkMessage = withTheme(ThemedMessage, "dark");

function Task9() {
  return (
    <div>
        <h6>Task14,task15</h6>
      <h3>Light Theme</h3>
      <LightMessage />

      <h3>Dark Theme</h3>
      <DarkMessage />
    </div>
  );
}

export default Task9;
