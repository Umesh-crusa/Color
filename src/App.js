import React, { useEffect, useState } from 'react'
import './App.css'
function App() {
  const [color,setColor]=useState("gray")
  const click=(color)=>{
    setColor(color)
  }
  useEffect(()=>{document.body.style.backgroundColor=color},[color])
  return (
    <div className='display'>
      <h1>hi {color}</h1>
      <button onClick={()=>click("red")}>red</button>
      <button onClick={()=>click("green")}>green</button>
      <button onClick={()=>click("pink")}>pink</button>
    </div>
  )
}

export default App
