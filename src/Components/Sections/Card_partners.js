import React from 'react'


function Card({URL, imageURL}) {
  return (
    <a href={URL}>
      <div className='card_partners'>
         <img src={imageURL} alt=''/>
     </div>
     </a>
  )
}

export default Card

