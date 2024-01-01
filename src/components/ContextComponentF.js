import React, { Component } from "react";
import { UserConsumer } from "./UserContext";

class ComponentF extends Component {
  render() {
    return (
      <UserConsumer>
        {(username) => {
          return <h3>Hello {username}</h3>;
        }}
      </UserConsumer>
    );
  }
}

export default ComponentF;

// STEPS TO IMPLEMENT WHEN MAKING USE OF CONTEXT...
// 1. Create the context.
// 2. Provide a context value.
// 3. Consume the context value in the necessary component.