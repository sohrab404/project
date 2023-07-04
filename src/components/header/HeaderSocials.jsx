import React from 'react'
import{FiInstagram} from 'react-icons/fi'
import{AiOutlineLinkedin} from 'react-icons/ai'
import{BsGithub} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
    <a href="https://linkedin.com" target="_blank"> <AiOutlineLinkedin/> </a>
    <a href="https://instagram.com" target="_blank"><FiInstagram/> </a>  
    <a href="https://github.com" target="_blank"> <BsGithub/> </a>      
    </div>
  )
}

export default HeaderSocials