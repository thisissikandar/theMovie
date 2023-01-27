import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Addmovies from './components/Addmovies'
import Caards from './components/Caards'
import Header from './components/Header'

const App = () => {
  return (
    <div className=' relative'>
      <Header />
      <Routes>
        <Route path='/' element={<Caards />}></Route>
        <Route path='/addmovie' element={<Addmovies />}></Route>
      </Routes>
    </div>
  )
}

export default App