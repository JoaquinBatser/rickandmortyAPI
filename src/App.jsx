import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Characters from './pages/Characters'
import Locations from './pages/Locations'
import Episodes from './pages/Episodes'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/characters'
          element={<Characters />}
        />
        <Route
          path='/locations'
          element={<Locations />}
        />
        <Route
          path='/episodes'
          element={<Episodes />}
        />
      </Routes>
    </>
  )
}

export default App
