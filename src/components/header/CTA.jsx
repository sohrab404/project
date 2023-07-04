import React from 'react'
import CV from '../../assets/cv.pdf'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} دانلود className='btn'>دانلود رزومه</a>
        <a href="#content" className='btn btn-primary'>ارتباط با ما</a>
    </div>
  )
}

export default CTA