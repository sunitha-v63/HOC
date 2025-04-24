import React from 'react';
import withMouseHoverTracker from './withMouseHoverTracker ';

const HoverBox = ({ mouseX, mouseY }) => {
  return (
    <div style={{
      width: '100px',
      height: '100px',
      border: '2px solid #555',
      borderRadius: '8px',
      textAlign: 'center',
      lineHeight: '100px',
      position: 'relative',
      backgroundColor: '#f0f8ff',
    }}>
      X: {mouseX}, Y: {mouseY}
    </div>
  );
};

const TrackedHoverBox = withMouseHoverTracker(HoverBox);

const Task6 = () => {
  return (
    <div>
      <h6>Task9,10</h6>
      <h3>Mouse Hover Tracker</h3>
      <TrackedHoverBox />
    </div>
  );
};

export default Task6;
