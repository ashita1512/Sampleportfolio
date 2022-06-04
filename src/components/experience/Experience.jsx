import React from 'react'
import './experience.css'
import {BsCheckAll} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What I have Done so Far</h5>
      <h2>Experience</h2>

      <div className='container experience_container'>
        <article className='experience'>
          <div className='experience_head'>
            <h3>Product Design Intern</h3>
            <h4> Setu</h4>
          </div>

          <ul className='experience_list'>
            <li>
              <BsCheckAll className='experience_list-icons' />
              <p>February - May 2022</p>
            </li>
            <li>
              <BsCheckAll className='experience_list-icons' />
              <p>Worked to build the main product in the settings screen flow</p>
            </li>
            <li>
              <BsCheckAll className='experience_list-icons' />
              <p>Worked on the usage of revamped Bridge</p>
            </li>
            <li>
              <BsCheckAll className='experience_list-icons' />
              <p>Designed a set of icons for the kit</p>
            </li>
            
          </ul>
        </article>


        <article className='experience'>
          <div className='experience_head'>
            <h3>Graphic Design Intern</h3>
            <h4>Curelink</h4>
          </div>

          <ul className='experience_list'>
            <li>
              <BsCheckAll className='experience_list-icons' />
              <p>November - December 2021</p>
            </li>
            <li>
              <BsCheckAll className='experience_list-icons' />
              <p>Designed the main graphics from scratch for the mobile app version</p>
            </li>
            <li>
              <BsCheckAll className='experience_list-icons' />
              <p>Worked on the banners and posters</p>
            </li>
            <li>
              <BsCheckAll className='experience_list-icons' />
              <p>Designed a set of icons for the kit</p>
            </li>
            
          </ul>
        </article>

        <article className='experience'>
          <div className='experience_head'>
            <h3>Designer</h3>
            <h4>Design Studio IIT Roorkee</h4>
          </div>

          <ul className='experience_list'>
            <li>
              <BsCheckAll className='experience_list-icons' />
              <p>February'21 - Present</p>
            </li>
            <li>
              <BsCheckAll className='experience_list-icons' />
              <p>Working with a group of design enthusiasts</p>
            </li>
            <li>
              <BsCheckAll className='experience_list-icons' />
              <p>Environment of problem solving and sketching out solutions</p>
            </li>
            <li>
              <BsCheckAll className='experience_list-icons' />
              <p>Taking design based projects for IIT Roorkee</p>
            </li>
            
          </ul>
        </article>



        <article className='experience'>
          <div className='experience_head'>
            <h3>Graphic Designer</h3>
            <h4>Geek Gazette</h4>
          </div>

          <ul className='experience_list'>
            <li>
              <BsCheckAll className='experience_list-icons' />
              <p>January'21 Present</p>
            </li>
            <li>
              <BsCheckAll className='experience_list-icons' />
              <p>Member of the Design Team of Geek Gazette</p>
            </li>
            <li>
              <BsCheckAll className='experience_list-icons' />
              <p>GG - the official technical magazine of IIT Roorkee</p>
            </li>
            <li>
              <BsCheckAll className='experience_list-icons' />
              <p>Working includes designing the magazines and posters for the group</p>
            </li>
            
          </ul>
        </article>


      </div>
    </section>
  )
}

export default Experience