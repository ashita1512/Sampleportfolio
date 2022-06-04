import React from 'react'
import ove from '../../assets/ove.pdf'

const CTA = () => {
  return (
    <div className='cta'>
       <a href={ove} download className='btn'>Download CV</a>
       <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA