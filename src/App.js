import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import ContextProvider from "./providers/ContextProvider";
import Context from "./config/Context";

class App extends Component {
  render() {
    return (
      <div>
        <ContextProvider>
          <Context.Consumer>
            {props => {
              console.log("====");
              console.log(props);
              return (
                <div>
                  <h1>count: {props.count}</h1>
                  <button onClick={props.inc}>inc</button>
                </div>
              );
            }}
          </Context.Consumer>
        </ContextProvider>
      </div>
    );
  }
}

export default App;
