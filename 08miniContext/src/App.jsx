
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {

  return (
    <UserContextProvider>
      <h1>Learning React</h1>
      <Login />
      <Profile />
    </UserContextProvider>

  )
}

export default App
