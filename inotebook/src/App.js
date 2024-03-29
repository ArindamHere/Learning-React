import './App.css';
import {
  Route,
  Routes
} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';

function App() {
  return (
    <>
      <NoteState>
        <Navbar />
        <Alert message="This is iNotebook" />
        <div className="container">
          <Routes>
            <Route exact path='/'
              element={<Home />}
            />
            <Route path='/about'
              element={<About />}
            />
          </Routes>
        </div>
      </NoteState>

    </>
  );
}

export default App;
