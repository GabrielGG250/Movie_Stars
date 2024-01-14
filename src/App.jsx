import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

import './App.css'

function App() {

  return (
    <div>
      <Navbar/>
      <main className='container'>
        <Outlet />
      </main>
    </div>
  )
}

export default App
