import React, { Component, useContext } from "react";
import AppContext from '../config/Context.jsx' ;




export const Age = () => {
  // share same data from AppContext
  const { list, setList } = useContext(AppContext);

  //remove last one 
  const removeLastOne = () => {  
    setList(list.slice(0, -1))
  }



  return(
    <div>
      <h1>Age Comp: {list.length}</h1>
      <ol>
        {
          list.map(item => {  
            return (<li key={`age-${item.age}`}>{item.age}</li>)
          })
        }
      </ol>
      <button onClick={removeLastOne}>removeLastOne</button>
    </div>
    
  )
   
}
