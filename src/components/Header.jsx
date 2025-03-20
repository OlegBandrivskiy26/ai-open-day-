

import React, { useState } from 'react'
import '../styles/header.css'
import { Link } from 'react-scroll'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header>
      <div className="logo-container">
        <div className="logo"></div>
      </div>
      {/* Desktop Navigation */}
      <div className="nav-container desktop">
        <Link className="nav-items" to="about" smooth={true} offset={-70} duration={500}>Про нас</Link>
        <Link className="nav-items" to="lecturers" smooth={true} offset={-20} duration={500}>Наші викладачі</Link>
        <Link className="nav-items" to="sponsors" smooth={true} offset={-100} duration={500}>Партнери</Link>
      </div>
      {/* Burger Menu Icon */}
      <div className="burger-menu" onClick={toggleMenu}>
         <div className={`line1 ${isOpen ? "open" : ""}`}></div>
         <div className={`line2 ${isOpen ? "open" : ""}`}></div>
         <div className={`line3 ${isOpen ? "open" : ""}`}></div>
      </div>
      {/* Mobile Navigation */}
      {isOpen && (
      <div className="mobile-menu">
         <Link className="nav-items" to="about" smooth={true} offset={-70} duration={500} onClick={toggleMenu}>Про нас</Link>
         <Link className="nav-items" to="lecturers" smooth={true} offset={-20} duration={500} onClick={toggleMenu}>Наші викладачі</Link>
         <Link className="nav-items" to="sponsors" smooth={true} offset={-100} duration={500} onClick={toggleMenu}>Партнери</Link>
      </div>
      )}
    </header>
  )
}

export default Header
