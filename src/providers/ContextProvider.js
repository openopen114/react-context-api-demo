import React, { Component, createContext } from "react";
import Context from '../config/Context';

class ContextProvider extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      count:0,

      inc: () => {
        this.setState({count: this.state.count + 1})
      }
    };
  }

  getDataFromAPI() {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then(response => response.json())
      .then(json => this.setState({items: json}))
  }

  componentWillMount() {
    this.getDataFromAPI();
  }



  render() {
    return (
        <Context.Provider value={ this.state}>
        {this.props.children}
       </Context.Provider>
    );
  }
}

export default ContextProvider;