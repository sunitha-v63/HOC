import React, { useState } from 'react';


const withMouseHoverTracker = (WrappedComponent) => {
  return (props) => {
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setCoords({
        x: Math.round(e.clientX - rect.left),
        y: Math.round(e.clientY - rect.top),
      });
    };

    return (
      <div onMouseMove={handleMouseMove} style={{ display: 'inline-block' }}>
        <WrappedComponent {...props} mouseX={coords.x} mouseY={coords.y} />
      </div>
    );
  };
};

export default withMouseHoverTracker;
