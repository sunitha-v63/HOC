import React from 'react'

import withTitle from "./withTitle";
import MyComponent from "./MyComponent";

const TitledComponent = withTitle(MyComponent);
function Task8() {
  return (
    <div>
        <h6>Task12,13</h6>
        <h3>Title Change and Reuse</h3>
        <TitledComponent/>
    </div>
  )
}

export default Task8