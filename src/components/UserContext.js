import React from "react";

// Create a context...
// NB: You can set a default value to your context...in the createContext() method.
const UserContext = React.createContext('Jane!');

// Since every context object created using the createContext() method from React comes with a Provider and a Consumer react component...
const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer}