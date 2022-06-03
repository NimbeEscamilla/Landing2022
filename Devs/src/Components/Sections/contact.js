import React from 'react'
import "../../Contact.css"

function Contact() {
  return (
    <section className='contact' id='contact'>
        <div className='contact__container'>
            <div className='contact__header'></div>
            <div className='contact__main'>
                <p className='contact__message'>
                    ¿Te gustaría dar un 
                    <span className='blue'> taller</span>
                    ? ¿Ser parte del
                    <span className='red'> equipo</span>
                    ? ¿O participar en alguna de nuestras actividades? No dudes en ponerte en
                    <span className='bold'> contacto </span>
                    con nosotros.
                </p>
                <ul className='contact__linkslist'>
                    <li className='item1'>
                        <a className='li__button' href='https://github.com/HeyWorkshop'>
                            <i id='github'></i>
                        </a>
                    </li>
                    <li className='item2'>
                        <a className='li__button' href='https://instagram.com/workshoptech'>
                            <i id='instagram'></i>
                        </a>
                    </li>
                    <li className='item3'>
                        <a className='li__button' href='https://www.linkedin.com/company/holaworkshop/'>
                            <i id='linkedin'></i>
                        </a>
                    </li>
                    <li className='item4'>
                        <a className='li__button' href='https://www.facebook.com/workshoptech/'>
                            <i id='facebook'></i>
                        </a>
                    </li>
                    <li className='item5'>
                        <a className='li__button' href='mailto:holaworkshoptech@gmail.com'>
                            <i id='mail'></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div className='contact__footer'>
                <p className='bold'>
                    <span className='blue'>Developed </span>
                    and
                    <span className='red'> Designed </span>
                    by Workshop team
                </p>
            </div>
        </div>
            
    </section>
  )
}

export default Contact