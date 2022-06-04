import React from 'react'
import './about.css'
import ABOUT from '../../assets/about.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
        <h5>Get to know</h5>
        <h2>About Me</h2>

        <div className='container about__container'>
          <div className='about__me'>
             <div className='about__me-image'>
               <img src={ABOUT} alt = "About Image" />
             </div>
          </div>

          <div className='about__content'>
            <div className='about__cards'>

               <article className='about__card'>
                 <FaAward className='about__icon'/>
                 <h5>Experience</h5>
                 <small>2+ years work Experience</small>
               </article>

               <article className='about__card'>
                 <FiUsers className='about__icon'/>
                 <h5>Clients</h5>
                 <small>100+ countrywide</small>
               </article>

               <article className='about__card'>
                 <VscFolderLibrary className='about__icon'/>
                 <h5>Projects</h5>
                 <small>15+ Completed</small>
               </article>
            </div>

            <p>
              Hello! My name is Chhavi Sood. I'm currently persuing my B.Tech from IIT Roorkee. I got my start as a graphic designer by creating a poster for north India's biggest technical fest COGNIZANCE'21 IITR. Today, I am open to all kinds of design work and currently looking for a product design intern :p
            </p>

            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
    </section>
  )
}

export default About