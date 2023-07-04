import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {BsAward} from 'react-icons/bs'
import {FaUserTie} from 'react-icons/fa'
import {AiTwotoneExperiment} from 'react-icons/ai'
const About = () => {
  return (
    <section id='about'>
      <h2>درباره من</h2>
      <div className="container about___container">
        <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About Image" />
        </div>
        </div>
       <div className="about__content">
        <div className="about__cards">

          <article className='about__card'>
            <BsAward className='about__icon'/>
            <h5>تجربه</h5>
            <small>2+ سال تجربه</small>
          </article>

          <article className='about__card'>
            <FaUserTie className='about__icon'/>
            <h5>تعداد کارفرما</h5>
            <small>10+ نفر</small>
          </article>

          <article className='about__card'>
            <AiTwotoneExperiment className='about__icon'/>
            <h5>پروژه ها</h5>
            <small>15+ پروژه</small>
          </article>

        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Eaque eveniet sapiente nulla tenetur, a delectus fuga nobis
            vero saepe similique eum necessitatibus libero pariatur non
           exercitationem, officia cupiditate debitis provident?</p>
           <a href="#contact" className='btn btn-primary'>سفارشی پروژه</a>
       </div>
       
      </div>
      
    </section>
  )
}

export default About