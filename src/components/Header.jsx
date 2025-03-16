import React from 'react'
import '../styles/header.css'
import { Link } from 'react-scroll'

const Header = () => {
  return (
    <header>
        <div className="logo-container">
            <div className="logo"></div>
        </div>
        <div className="nav-container">
            <Link 
            className="nav-items" to="students" smooth={true} offset={-70} duration={500}>Наші студенти</Link>
            <Link className="nav-items" to="timeline" smooth={true} offset={-100} duration={500}>Розклад</Link>
            <Link className="nav-items" to="clubs" smooth={true} offset={0} duration={500}>Гуртки</Link>
            <Link className="nav-items" to="lecturers" smooth={true} offset={-20} duration={500}>Наші викладачі</Link>
            <Link className="nav-items" to="sponsors" smooth={true} offset={-100} duration={500}>Партнери</Link>
        </div>
    </header>
  )
}

export default Header
