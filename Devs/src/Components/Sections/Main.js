import React from 'react'
import Sally from '../../assets/Sally.svg'
import "../../Main.css"

function Main() {
  return (
    <section id='main'>
        <main className='main'>
            <div className='main__left'>
              <h1 className='main__title'>
              Somos 
              <span id='rojo'> Workshop</span>
              </h1>
              <p>
                Somos una 
                <span id='rojo'> organización </span>
                centrada en crear conexiones entre personas y 
                <span id='azul'> oportunidades </span>
                de crecimiento académico y profesional. 
              </p>
              <a href="#team">¡Conócenos!</a>
            </div>
            <img title='Sally' className='solid__Sally' src={Sally} alt="Sally"></img>
        </main>
    </section>
  )
}

export default Main