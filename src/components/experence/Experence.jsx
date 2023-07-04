import React from 'react'
import './experence.css'
import {AiFillHtml5} from 'react-icons/ai'
const Experence = () => {
  return (
  <section id='Exprince'>
<h2> توانایی های من</h2>
    <div className='container xp__container'>
<div className="xp__frontend">
  <h3>Frontend dev</h3>
  <div className="xp__content">
    <article className="xp__details">
    <AiFillHtml5 />
    <div>
    <h4>HTML</h4>
<small className='text-light'> Sinior Dev</small>
</div>
    </article>

    <article className="xp__details">
    <AiFillHtml5 />
    <div>
    <h4>CSS</h4>
<small className='text-light'> Sinior Dev</small>
</div>
    </article>

    <article className="xp__details">
    <AiFillHtml5 />
    <div>
    <h4>JS</h4>
<small className='text-light'> Sinior Dev</small>
</div>
    </article>

    <article className="xp__details">
    <AiFillHtml5 />
    <div>
    <h4>Tailwind CSS</h4>
<small className='text-light'> Sinior Dev</small>
</div>
    </article>



    <article className="xp__details">
    <AiFillHtml5 />
    <div>
    <h4>React JS</h4>
<small className='text-light'> Junior Dev</small>
</div>
    </article>

  </div>
</div>


{/*END FRONTEND DEV */}

<div className="xp__other">
<h3>Other Skill</h3>
<div className="xp__content">
<article className="xp__details">
    <AiFillHtml5 />
<div>
    <h4>Seo</h4>
<small className='text-light'> Pro </small>
</div>
    </article>

    <article className="xp__details">
    <AiFillHtml5 />
<div>
    <h4>Adobe Primere</h4>
<small className='text-light'> Pro</small>
</div>
    </article>
    <article className="xp__details">
    <AiFillHtml5 />
    <div>
    <h4>Adobe Photoshop</h4>
<small className='text-light'> Basic</small>
</div>
    </article>

    <article className="xp__details">
    <AiFillHtml5 />
    <div>
    <h4>Adobe after Effect</h4>
<small className='text-light'> Basic</small>
</div>
    </article>
    <article className="xp__details">
    <AiFillHtml5 />
    <div>
    <h4>Wordpress</h4>
<small className='text-light'> MID level Dev</small>
</div>
    </article>
    </div>
    </div>
</div>

  </section>
  )
}

export default Experence