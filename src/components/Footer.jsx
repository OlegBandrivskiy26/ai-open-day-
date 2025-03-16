import React from 'react'
import "../styles/footer.css"
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <footer>
        <div className="footer__container">
            <div className="first__grp">
                <div className="logo__footer"></div>
                <div className="social__networks__grp">
                    <a href="https://www.instagram.com/ai_lpnu?igsh=MW1qNnY3eXFyZjIzag=="><div className="social__networks instagram"></div></a>
                    <a href="https://www.facebook.com/ai.lviv.ua/"><div className="social__networks Facebook"></div></a>
                </div>
                <h5 className="copyright">Copyright © by ai.dept</h5>
            </div>
            <div className="contact__info">
                <h4 className="title__contact">Контактна інформація</h4>
                <h5 className='txt__contact'>ai.dept@lpnu.ua</h5>
            </div>
            <div className="footer__nav__menu">
                <Link className='nav__items__footer' to="about" smooth={true} offset={-100} duration={500}>Про подію</Link>
                <Link className='nav__items__footer' to="speakers" smooth={true} offset={-100} duration={500}>Спікери</Link>
                <Link className='nav__items__footer' to="program" smooth={true} offset={-100} duration={500}>Програма</Link>
                <Link className='nav__items__footer' to="sponsors" smooth={true} offset={-100} duration={500}>Спонсори</Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer
