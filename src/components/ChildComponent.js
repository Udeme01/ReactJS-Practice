import React from 'react';

function ChildComponent(props) {
  return (
    <div>
        {/* Access your 'method' in the 'child component' using the 'props' object */}
      {/* <button type='button' onClick={props.greetHandler}>Click Me!</button> */}
      <button type='button' onClick={() => props.greetHandler('Child')}>Click Me!</button>
    </div>
  );
}

export default ChildComponent;