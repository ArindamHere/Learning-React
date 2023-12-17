import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const addValue = () => {
    // console.log("Added to Counter value : ", counter);
    console.log("value added");
    // counter = counter + 1;
    setCounter(counter + 1);
  }
  const removeValue = () => {
    console.log("Value removed.");
    setCounter(counter - 1);
  }

  // let counter = 0;
  let [counter, setCounter] = useState(0);
  return (
    <>
      <h1>React With Arindam</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
