import React from 'react';

const withCustomStyle = (WrappedComponent, customStyles = {}) => {
  return (props) => {
    const style = {
      width:"200px",
      padding: '20px',
      border: '2px solid #ccc',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
      ...customStyles,
    };

    return (
      <div style={style}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default withCustomStyle;
