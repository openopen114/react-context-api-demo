import React, { Component, useContext } from "react";
import logo from "./logo.svg";
import "./App.css";

import AppContextProvider from "./providers/ContextProvider"; 
import { List } from './components/List.jsx';
import { Age } from './components/Age.jsx';

 




class App extends Component {
  render() {
    return (
      <div>

        {/* App Context Provider */}
        <AppContextProvider> 

          {/* List Comp */}
          <List />

          {/* Age Comp */}
          <Age />       
        </AppContextProvider>
      </div>
    );
  }
}

export default App;
