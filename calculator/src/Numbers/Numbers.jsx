import React from "react";
import './numbers.css'
function Numbers(number) {
  return (
      <button className="container" onClick={number.onPress}>{number.number}</button> 
  );
}

export default Numbers;
