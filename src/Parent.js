import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor); //initial value color state
  const [childrenColor, setChildrenColor] = useState("#FFF");

  function handleChangeColor(newChildColor) {
    const newRandomColor = getRandomColor();
    setColor(newRandomColor); //update color state to new value
    setChildrenColor(newChildColor); //deliverable two adds the prop
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child color={childrenColor} onChangeColor={handleChangeColor}/>
      <Child color={childrenColor} onChangeColor={handleChangeColor}/>
    </div>
  );
}

export default Parent;
