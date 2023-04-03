import React from 'react'
import './realisation.css'
import {FaLongArrowAltRight} from 'react-icons/fa'
import IMG1 from '../../assets/IMG1.png'
import IMG2 from '../../assets/IMG2.png'

const data = [
    {
    id: 1,
    image: IMG1,
    title: 'AsselinMigani',
    github: 'https://codepen.io',
    demo: 'https://codepen.io',
    description: 'Création d\'un site web dynamique avec contact, (asselinmigani.fr), création de leurs réseaux sociaux (Instagram, Twitter, Pinterest) avec plan de communication et création d\'une affiche publicitaire affichée dans tout le Douaisie.'
    },
    {
    id: 2,
    image: IMG2,
    title: 'Animations open source',
    github: 'https://codepen.io',
    demo: 'https://codepen.io',
    description: 'Création de différentes animations sur Codepen pour me divertir, et les rendre accessibles à tous.'
    },
    {
      id: 3,
      image: IMG1,
      title: 'Animations open source',
      github: 'https://codepen.io',
      demo: 'https://codepen.io',
      description: 'Création de différentes animations sur Codepen pour me divertir, et les rendre accessibles à tous.'
    },
    {
      id: 4,
      image: IMG2,
      title: 'Animations open source',
      github: 'https://codepen.io',
      demo: 'https://codepen.io',
      description: 'Création de différentes animations sur Codepen pour me divertir, et les rendre accessibles à tous.'
    },
    {
      id: 5,
      image: IMG1,
      title: 'Animations open source',
      github: 'https://codepen.io',
      demo: 'https://codepen.io',
      description: 'Création de différentes animations sur Codepen pour me divertir, et les rendre accessibles à tous.'
    },
    {
      id: 6,
      image: IMG2,
      title: 'Animations open source',
      github: 'https://codepen.io',
      demo: 'https://codepen.io',
      description: 'Création de différentes animations sur Codepen pour me divertir, et les rendre accessibles à tous.'
    },
]

const Realisation = () => {
  return (
    <section id="realisation">
      <div className='title-portfolio'>
        <h2>
          <span>04.</span> 
          Réalisations
        </h2>
      </div>

    <div className="container portfolio__container">
      {
        data.map(({id, image, title, github, demo, description}) => {
          return(
            <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className='portfolio__item-cta'>
            <a href={github} className='btn' target='_blank'>Code source <FaLongArrowAltRight/></a>
            <a href={demo} className='btn btn-primary' target='_blank'>Lien vers le site <FaLongArrowAltRight/></a>
            </div>
          </article>
          )
        })
      }
    </div>
  </section>
  )
}

export default Realisation