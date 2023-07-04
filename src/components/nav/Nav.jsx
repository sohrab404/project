import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {FiUsers} from 'react-icons/fi'
import {BiBookBookmark} from 'react-icons/bi'
import {MdMiscellaneousServices} from 'react-icons/md'
import {TbMessage2Code} from 'react-icons/tb'
import {useState} from 'react'
const Nav = () => {
const [activeNav, setActiveNav] = useState('#')
  return (
   <nav> 
    <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
    <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><FiUsers/></a>
    <a href="#Exprince" onClick={() => setActiveNav('#Exprince')} className={activeNav === '#Exprince' ? 'active' : ''} ><BiBookBookmark/></a>
    <a href="#Services" onClick={() => setActiveNav('#Services')} className={activeNav === '#Services' ? 'active' : ''}><MdMiscellaneousServices/></a>
    <a href="#Contact" onClick={() => setActiveNav('#Contact')} className={activeNav === '#Contact' ? 'active' : ''}><TbMessage2Code/></a>
   </nav>
  )
}

export default Nav