import React, { Component, useContext } from "react";
import AppContext from '../config/Context.jsx' ;




export const List = () => {
  // share same data from AppContext
  const { list, setList } = useContext(AppContext) 

  //add a row 
  const addListName = () => { 
  	const num = list.length + 1;
  	const addObj = {
  		name:`add-${num}`,
  		age:num
  	}
 
  	list.push(addObj)
 
  	setList(list)
  }


  return(
    <div>
      <h1>List Comp: {list.length}</h1>
      <ol>
        {
          list.map(item => {  
            return (<li key={`name-${item.name}`}>{item.name}</li>)
          })
        }
      </ol>
      <button onClick={addListName}>AddObj</button>
    </div>
    
  )
   
}
