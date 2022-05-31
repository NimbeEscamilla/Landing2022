import React from 'react'
import "../../Documents.css"
import Fest from '../../assets/FestInformation.png'
import Sponsor from '../../assets/Sponsor.png'
import FAQ from '../../assets/WeAreWorkshop.png'


function Documents() {
  return (
    <section className='docsWorkshop blue'  id='docsWorkshop'>
        <div className='partners__container'>
           <h2 className='docs'>Documentación</h2>
           <div className='partners__grid'>
              <a className='partners__card' href='https://heyworkshop.github.io/Site/assets/pdfs/We-are-Workshop-presentation.pdf'>
                <img className='card__image' src={FAQ}></img>
              </a>
              <a className='partners__card' href='https://heyworkshop.github.io/Site/assets/pdfs/Content-of-Sponsorships.pdf'>
                <img className='card__image' src={Sponsor}></img>
              </a>
              <a className='partners__card' href='https://heyworkshop.github.io/Site/assets/pdfs/INTERN_FEST22.pdf'>
                <img className='card__image' src={Fest}></img>
              </a>
           </div>
        </div>
    </section>
  )
}

export default Documents


