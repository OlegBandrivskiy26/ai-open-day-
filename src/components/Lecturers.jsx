import React from 'react'
import "../styles/lecturers.css"

const Lecturers = () => {
  return (
    <section className='lecturers' id='lecturers'>
      <h1 className="lecturers-title">Наші викладачі</h1>
      <div className="lecturers-container">
        <div className="lecturer">
            <h3 className="lecturer-name">Ярослав Виклюк</h3>
            <div className="lecturer-img lecturer-img1"></div>
        </div>
        <div className="lecturer">
            <h3 className="lecturer-name">Засоба Євген</h3>
            <div className="lecturer-img lecturer-img2"></div>
        </div>
        <div className="lecturer">
            <h3 className="lecturer-name">Ярослав Виклюк</h3>
            <div className="lecturer-img lecturer-img1"></div>
        </div>
        <div className="lecturer">
            <h3 className="lecturer-name">Засоба Євген</h3>
            <div className="lecturer-img lecturer-img2"></div>
        </div>
        <div className="lecturer">
            <h3 className="lecturer-name">Ярослав Виклюк</h3>
            <div className="lecturer-img lecturer-img1"></div>
        </div>
        <div className="lecturer">
            <h3 className="lecturer-name">Засоба Євген</h3>
            <div className="lecturer-img lecturer-img2"></div>
        </div>
      </div>
    </section>
  )
}

export default Lecturers
