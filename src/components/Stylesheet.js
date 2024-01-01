import React from 'react';
import './Sheet.css';

function Stylesheet(props) {
    const className = props.primary ? 'primary' : '';
  return (
    <div>
      <h1 className={`${className} font-xl`}>UDEME</h1>
    </div>
  );
}

export default Stylesheet;
