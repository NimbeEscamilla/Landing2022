import React from 'react'
import Partners from './Components/Sections/Partners'
import './App.css'
import Header from './Components/Sections/Header'
import Internship from './Components/Sections/Internship'
import Documents from './Components/Sections/Documents'
import Contact from './Components/Sections/Contact'
import Main from './Components/Sections/Main'
import './App.css'
import Team from './Components/Sections/team'



function App() {
  return (
    <div className='App'>
      <Header/>
      <Main/>
      <Internship/>
      <Partners/>
      <Team/>
      <Documents/>
      <Contact/>
    </div>
  )
}

export default App
