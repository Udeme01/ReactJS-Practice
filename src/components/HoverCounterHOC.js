import React, { Component } from "react";
import withCounter from "./HOC";

class HoverCounterHOC extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <h1 onMouseOver={incrementCount}>{this.props.name} Hovered {count} times!</h1>
      </div>
    );
  }
}

export default withCounter(HoverCounterHOC, 10);