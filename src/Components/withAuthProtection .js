import React from 'react';

// HOC that checks for `isAuthenticated` prop before rendering the component
const withAuthProtection = (WrappedComponent, FallbackComponent = null) => {
  return (props) => {
    const { isAuthenticated } = props;

    if (!isAuthenticated) {
      return FallbackComponent ? <FallbackComponent /> : null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuthProtection;
