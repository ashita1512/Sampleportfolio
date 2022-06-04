import React from 'react'
import './skills.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Skills = () => {
  return (
    <section id='skills'>
       <h5>What Skills I have</h5>
       <h2>My Skills</h2>

       <div className='container skills_container'>
          <div className='skills_'>
             <h3>Skills</h3>
             <div className='skills_content'>
                <article className='skills_details'>
                  <BsFillPatchCheckFill className = 'skills_details' />
                  <div>
                    <h4>User Research</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>

                <article className='skills_details'>
                  <BsFillPatchCheckFill className = 'skills_details' />
                  <div> 
                    <h4>UI Design</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>

                <article className='skills_details'>
                  <BsFillPatchCheckFill className = 'skills_details' />
                  <div>
                    <h4>UX Design</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>

                <article className='skills_details'>
                  <BsFillPatchCheckFill className = 'skills_details' />
                  <div>
                    <h4>Usability testing</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>

                <article className='skills_details'>
                  <BsFillPatchCheckFill className = 'skills_details' />
                  <div>
                    <h4>Quick Prototyping</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>

                <article className='skills_details'>
                  <BsFillPatchCheckFill className = 'skills_details' />
                  <div>
                    <h4>User Personas</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>

                <article className='skills_details'>
                  <BsFillPatchCheckFill className = 'skills_details' />
                  <div>
                    <h4>Wireframing</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>

                <article className='skills_details'>
                  <BsFillPatchCheckFill className = 'skills_details' />
                  <div>
                    <h4>Information Architecture</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>

                <article className='skills_details'>
                  <BsFillPatchCheckFill className = 'skills_details' />
                  <div>
                    <h4>Interaction Design</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>

                <article className='skills_details'>
                  <BsFillPatchCheckFill className = 'skills_details' />
                  <div>
                    <h4>Motion Design</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>

                <article className='skills_details'>
                  <BsFillPatchCheckFill className = 'skills_details' />
                  <div>
                    <h4>3D Design</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>

                <article className='skills_details'>
                  <BsFillPatchCheckFill className = 'skills_details' />
                  <div>
                    <h4>Voxel Artist</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>

            
             </div>
          </div>
          <div className='tools'>
            <h3>Tools</h3>
            <div className='skills_content'>

               <article className='skills_details'>
                  <BsFillPatchCheckFill />
                  <div>
                    <h4>Figma</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
               </article>

               <article className='skills_details'>
                  <BsFillPatchCheckFill />
                  <div>
                    <h4>Sketch</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
               </article>

               <article className='skills_details'>
                  <BsFillPatchCheckFill />
                  <div>
                    <h4>Adobe XD</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
               </article>

               <article className='skills_details'>
                  <BsFillPatchCheckFill />
                  <div>
                    <h4>Adobe Illustrator</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
               </article>

               <article className='skills_details'>
                  <BsFillPatchCheckFill />
                  <div>
                    <h4>Adobe Photoshop</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
               </article>

               <article className='skills_details'>
                  <BsFillPatchCheckFill />
                  <div>
                    <h4>After Effects</h4>
                    <small className='text-light'>Intermediate</small>
                  </div>
               </article>

               <article className='skills_details'>
                  <BsFillPatchCheckFill />
                  <div>
                    <h4>Premiere Pro</h4>
                    <small className='text-light'>Intermediate</small>
                  </div>
               </article>

               <article className='skills_details'>
                  <BsFillPatchCheckFill />
                  <div>
                    <h4>Blender</h4>
                    <small className='text-light'>Intermediate</small>
                  </div>
               </article>

               <article className='skills_details'>
                  <BsFillPatchCheckFill />
                  <div>
                    <h4>Magicavoxel</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
               </article>
               
               <article className='skills_details'>
                  <BsFillPatchCheckFill />
                  <div>
                    <h4>Notion</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
               </article>

            </div>
          </div>
       </div>

    </section>
  )
}

export default Skills