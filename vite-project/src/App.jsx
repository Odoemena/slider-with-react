import React from "react";
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function increase(){
    setCount(count +1);
  }
function decrease(){
  setCount(count -1);
}


  return (
    <>
    
      
    </>
    
  )
}

export default App
