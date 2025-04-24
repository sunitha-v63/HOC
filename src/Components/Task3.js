import React from 'react'
import withCustomStyle from './StyledComponent';

const MyComponent = () => {
  return <div>Styled Component!</div>;
};

const StyledComponent = withCustomStyle(MyComponent, {
  backgroundColor: 'grey',
  color: 'white',
});

function Task3() {
  return (
    <div>
        <h6>Task5</h6>
<h3>Wrapped with Style</h3>
<StyledComponent />
    </div>
  )
}

export default Task3