import React from 'react'
import Partners from './Components/Sections/partners'
import './App.css'
import Header from './Components/Sections/header'
import Team from './Components/Sections/team'
import Intership from './Components/Sections/intership'

function App() {
  return (
    <div className='App'>
      <Header/>
      <Partners/>
      <Team/>
      <Intership/>
    </div>
  )
}

export default App
