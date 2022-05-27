import React from 'react'
import Sally from '../../assets/Sally.svg'
import "../../Intership.css"

function Intership() {
    return ( 
        <section id='intership'>
            <div className='intership'>
                <h1 id='rojo' className='intership__title'>
                 Intership
                </h1>
                    <p>
                    Es un programa organizado por Workshop que toma lugar a lo largo del año. La principal meta del programa es detectar estudiantes con
                    <span id='rosa'> potencial </span>
                    y vincularlos en la industria del
                    <span id='azul'> software.</span>
                    </p>
                </div>
                <img title='Sally' className='solid__Sally' src={Sally} alt="Sally"></img>
        </section>
    )
}
export default Intership