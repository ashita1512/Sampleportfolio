import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsDribbble} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
       <a href='https://www.linkedin.com/in/chhavi-sood-017177205/' target='_blank'><BsLinkedin /></a>
       <a href='https://dribbble.com/shots/18353232-Hello-Dribbble' target='_blank'><BsDribbble /></a>
       <a href='https://github.com/ChhaviSood' target='_blank'><BsGithub /></a>
       <a href='https://www.instagram.com/_chhavi.s/' target='_blank'><BsInstagram /></a>

    </div>
  )
}

export default HeaderSocials