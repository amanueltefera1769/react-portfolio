import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know </h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src= {ME} alt='About us' />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5> Experiance </h5>
              <small> 2+ Years Working </small>

            </article>
            
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5> Clients </h5>
              <small> 4+ in Ethiopia </small>

            </article>
          
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5> Projects </h5>
              <small> 5+ </small>

            </article>
          
          </div>

          <p>I'm Amanuel Tefera, a front-end developer with over 2 years of experience in building beautiful and functional websites. I specialize in WordPress website design, and I have worked with a variety of clients to create stunning and user-friendly websites that meet their unique needs.

On this website, you'll find a collection of my recent projects, as well as information about my skills and experience. I take pride in my ability to create websites that are not only aesthetically pleasing but also easy to navigate and use. I believe that a website should be an extension of your brand, and that it should help you connect with your audience in a meaningful way.</p>
        
          <a href="#contact" className='btn btn-primary'> Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About