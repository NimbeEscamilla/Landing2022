import React from 'react'
import Card from './Card_partners'
import '../Partners.css'

import Gleo from '../assets/gleo.png'
import Yellowme from '../assets/yellowme.svg'
import Uady from '../assets/uady.png'
import Encora from '../assets/encora.svg'
import Salesforce from '../assets/salesforce.png'
import Checa from '../assets/checa.svg'
import Soldai from '../assets/soldai.svg'
import Coati from '../assets/coati.svg'
import Walook from '../assets/walook.png'
import WomenCode from '../assets/women_code.png'
import Cubicode from '../assets/cubicode.png'
import Dealergeek from '../assets/dealergeek.png'

const cards = [
    {
        id: 'gleo',
        image: Gleo,
        link: 'https://gleo.mx/'
    },
    {
        id: 'yellowme',
        image: Yellowme,
        link: 'https://www.yellowme.mx/'
    },
    {
        id: 'uady',
        image: Uady,
        link: 'https://uady.mx/'
    },
    {
        id: 'encora',
        image: Encora,
        link: 'https://www.encora.com/es/'
    },
    {
        id: 'salesforce',
        image: Salesforce,
        link: 'https://www.salesforce.com/'
    },
    {
        id: 'checa',
        image: Checa,
        link: ''
    },
    {
        id: 'soldai',
        image: Soldai,
        link: 'https://soldai.com/'
    },
    {
        id: 'coati',
        image: Coati,
        link: 'https://www.coati.mx/'
    },
    {
        id:'walook',
        image: Walook,
        link: 'https://www.walook.com.mx/'
    },
    {
        id: 'womenCode',
        image: WomenCode,
        link: 'https://www.womenwhocode.com/'
    },
    {
        id: 'cubicode',
        image: Cubicode,
        link: 'https://websitescubicode.mx/cubicodemx/'
    },
    {
        id: 'dealergeek',
        image: Dealergeek,
        link: 'http://dealergeek.com/web/about.php'
    },
]

function Partners() {
  return (
    <div className='partners_container'>
        <h2>Nuestros <span>Partners</span>.</h2>
        <div className='row'>
            {
                cards.map(card => (
                    <div className='col' key={card.id}>
                       <Card URL={card.link} imageURL={card.image}/>
                    </div>    
                ))
            }
        </div>
    </div>
  )
}

export default Partners