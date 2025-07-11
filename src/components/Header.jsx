import React, { useState } from 'react'
import '../styles/header.css'
import { Link } from 'react-scroll'

const Header = ({ onToggleView, isAlternateView }) => {
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
        <button className="toggle-view-btn" onClick={onToggleView}>
        {isAlternateView ? 'Бакалаврам' : 'Магістрам'}
        </button>
      </div>

      {/* Gradient Button (Desktop Only) */}
      <div className="desktop apply-btn-wrapper">
        <a 
          href="https://vstup.osvita.ua/y2024/r14/97/1321234/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="gradient-button header-btn"
        >
          Подати заяву Бакалаврам
        </a>
        <a 
          href="https://vstup.osvita.ua/y2024/r14/97/1340189/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="gradient-button header-btn"
        >
          Подати заяву Магістрам
        </a>
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
          <button className="toggle-view-btn" onClick={onToggleView}>
        {isAlternateView ? 'Бакалаврам' : 'Магістрам'}
        </button>
        </div>
      )}
    </header>
  )
}

export default Header
