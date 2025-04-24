import React, { useState } from "react";

function withErrorBoundary(WrappedComponent, FallbackComponent) {
  return function ErrorBoundaryWrapper(props) {
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState(null);

    try {
      if (hasError) {
        return <FallbackComponent error={error} />;
      }

      return <WrappedComponent {...props} />;
    } catch (err) {
      setHasError(true);
      setError(err);
      return null;
    }
  };
}

export default withErrorBoundary;
