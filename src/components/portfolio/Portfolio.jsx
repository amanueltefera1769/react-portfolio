import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/dan-.jpg'
import IMG2 from '../../assets/akbera-.jpg'
import IMG3 from '../../assets/0101-.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id:1,
    image: IMG1,
    title: 'Dan Energy Reaserch and Development',
    github: '',
    demo: 'https://danenergyethiopia.com'
  },
  {
    id:2,
    image: IMG2,
    title: 'Akbera Clothing',
    github: '',
    demo: 'https://akbera.com'
  },
  {
    id:3,
    image: IMG3,
    title: 'Zero One Zero One Tech and Consultancy',
    github: '',
    demo: 'https://0101-te.com'
  },
  {
    id:4,
    image: IMG4,
    title: 'Personal Portfolio',
    github: 'https://github.com/amanueltefera1769',
    demo: ''
  },
  
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-ctn">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
            
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio