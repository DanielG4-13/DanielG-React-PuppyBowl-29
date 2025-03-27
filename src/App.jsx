import { useState } from 'react'
import {Routes, Route, Link } from 'react-router-dom'
import './App.css'
import AllPlayers from './components/Allplayers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<AllPlayers/>} />
        {/* <Route path='/players/:id' element={<SinglePlayer />}/> */}
      </Routes>
    </>
  )
}

export default App
