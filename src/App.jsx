import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'

import NavBar from './components/NavBar'
import About from './pages/About'

function App() {
  return (
    <main className='m-auto max-w-[1000px] px-12'>
      <NavBar />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/about'
          element={<About />}
        />
      </Routes>
    </main>
  )
}

export default App
