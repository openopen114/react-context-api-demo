import React, { Component, createContext, useState } from "react";
import AppContext from '../config/Context';




const AppContextProvider = (props) => {
  // const list = [
  // 	{name:'A001', age:11}, 
  // 	{name:'B001', age:21}
  // ];


  const [list, setList] = useState([
  	{name:'A001', age:11}, 
  	{name:'B001', age:21}
  ])



  return (
    <AppContext.Provider value={{list, setList}}>
      {props.children}
    </AppContext.Provider>
  );

}

 

export default AppContextProvider;