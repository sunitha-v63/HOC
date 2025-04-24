import React from 'react';

// Simple default spinner component
const DefaultSpinner = () => (
  <div style={{ textAlign: 'center', padding: '2rem' }}>
    <span>🔄 Loading...</span>
  </div>
);

// HOC that shows a spinner while loading
const withLoadingSpinner = (WrappedComponent, SpinnerComponent = DefaultSpinner) => {
  return (props) => {
    const { isLoading } = props;

    if (isLoading) {
      return <SpinnerComponent />;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withLoadingSpinner;
