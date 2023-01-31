import React from 'react'
import CV from '../../assets/cv.pdf'
const CIA = () => {
  return (
    <div>
        <a href={CV} download className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Lets talk</a>
    </div>
    

  )
}

export default CIA