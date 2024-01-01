import React, { Component } from "react";

export class ClickCounterRP extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button type="button" onClick={incrementCount}>
          Click {count} times!
        </button>
      </div>
    );
  }
}

export default ClickCounterRP;
