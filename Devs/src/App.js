import React from 'react'
import Partners from './Components/Sections/Partners'
import Header from './Components/Sections/Header'
import Internship from './Components/Sections/Internship'
import Documents from './Components/Sections/Documents'
import Contact from './Components/Sections/Contact'
import Main from './Components/Sections/Main'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Header/>
      <Main/>
      <Internship/>
      <Partners/>
      <Documents/>
      <Contact/>
    </div>
  )
}

export default App
