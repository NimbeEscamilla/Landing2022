import React from 'react'
import Sally from '../../assets/Sally-22.png'
import "../../Intership.css"

function Intership() {
    return ( 
        <section id='intership'>
            <div className='container'>
                <div className='container__right'>
                    <h2 id='rosa' className='container__title'>
                    Intership
                    </h2>
                        <p>
                        Es un programa organizado por Workshop que toma lugar a lo largo del año. La principal meta del programa es detectar estudiantes con
                        <span id='rosa'> potencial </span>
                        y vincularlos en la industria del
                        <span id='azul'> software.</span>
                        </p>
                    </div>
                    <img title='Sally-22' className='container__img' src={Sally} alt="Sally-22"></img>
            </div>
        </section>
    )
}
export default Intership