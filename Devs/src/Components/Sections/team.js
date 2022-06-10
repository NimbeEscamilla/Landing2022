import React, { Component } from 'react'
import card from './team_cards'
import '../../Team.css'
import Linkdin from '../../assets/LogoLinkdin.png'
import Github from '../../assets/Github.png'
import Gmail from '../../assets/Gmail.png'
class team extends Component {
    render() {
        //code
        return (
            <div className='team_container'>
                <h2 id='team' className='h2_team'>Nuestro <span className='span_team'>Equipo</span>.</h2>
                <div className='row_team'>
                    {
                         card.map(card => (
                            <li className='list_team'>
                                <div className='col_team' key={card.id}>
                                    <div class="content">
                                        <div class="photo">
                                            <img src={card.image} alt="" />
                                            <div class="details">
                                                <p class="name">{card.name}</p>
                                                <p class="team">{card.team}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card__content">
                                        <h3 class="card__title">{card.name}</h3>
                                        <p class="card__description">{card.description}</p>
                                        <ul className='SocialMedia_team'>
                                            <li >
                                                <a className='a_linkdin' href={card.linkdIn}>
                                                    <div className='linkdin_team'>
                                                        <img className='image_socialMedia' src={Linkdin} alt='' />
                                                    </div>
                                                </a>
                                            </li>
                                            <li >
                                                <a className='a_gitHub' href={card.gitHub}>
                                                    <div className='gitHub_team'>
                                                        <img className='image_socialMedia' src={Github} alt='' />
                                                    </div>
                                                </a>
                                            </li>
                                            <li >
                                                <a className='a_Gmail' href={card.Gmail}>
                                                    <div className='Gmail_team'>
                                                        <img className='image_socialMedia' src={Gmail} alt='' />
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </li>

                        ))

                    }

                </div>
                    
            </div>

        )

    }
}
export default team;