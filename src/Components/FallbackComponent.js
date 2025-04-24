import React from "react";
import withErrorBoundary from "./Task7"; // Your HOC file

const ErrorFallback = ({ error }) => (
  <div style={{ color: "red" }}>
    <h2>Oops! Something went wrong.</h2>
    <p>{error?.message}</p>
  </div>
);

const BuggyComponent = () => {
  throw new Error("This is a simulated error!");
  // return <div>This won't render.</div>; ❌ remove this
};

const SafeComponent = withErrorBoundary(BuggyComponent, ErrorFallback);

export default SafeComponent;
