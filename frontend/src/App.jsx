import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'

import Dashboard from './features/pages/Dashboard'
import Login from './features/pages/Login'
import Register from './features/pages/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <div className='container'>
          <Header/>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />


            <Route />

          </Routes>

        </div>


      </Router>

    </>
  )
}

export default App
