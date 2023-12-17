import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Arindam",
    age: 22
  }
  let newArr = [1, 2, 3];

  return (
    <>
      <h1 className='bg-green-300 text-black p-4 rounded-xl mb-4'>Tailwind Text</h1>
      <div className='flex flex-row'>
        {/* <Cards userObj={myObj} userArr={newArr} /> */}
        <Cards userName="ArindamHere" btnTxt="Click Me!!" />
        <Cards userName="Hitesh- ChaiAurCode" />
      </div>

    </>
  )
}

export default App
