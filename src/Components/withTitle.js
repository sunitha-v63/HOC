import React, { useEffect } from "react";

function withTitle(WrappedComponent) {
  const ComponentWithTitle = (props) => {
    useEffect(() => {
      const componentName = WrappedComponent.displayName || WrappedComponent.name || "Component";
      document.title = componentName;
    }, []);

    return <WrappedComponent {...props} />;
  };

  ComponentWithTitle.displayName = `WithTitle(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;

  return ComponentWithTitle;
}

export default withTitle;
