import React from 'react'
import "../styles/lecturers.css"

const Lecturers = () => {
  return (
    <section className='lecturers' id='lecturers'>
      <h1 className="lecturers-title">Наші викладачі</h1>
      <div className="lecturers-container">
        <div className="lecturer">
            <h3 className="lecturer-name">Наталія Шаховська <br /> <span>Засновниця кафедри СШІ,<br /> ректорка НУЛП</span></h3>
            <div className="lecturer-img lecturer-img5"></div>
        </div>
        <div className="lecturer">
            <h3 className="lecturer-name">Наталія Мельникова <br /> <span>Завідувачка кафедри СШІ</span></h3>
            <div className="lecturer-img lecturer-img10"></div>
        </div>
        <div className="lecturer">
            <h3 className="lecturer-name">Іван Загородній <br /> <span>Куратор освітньої програми Artificial Intelligence у Lviv IT Cluster. Керівник Software Development Office у SoftServe</span></h3>
            <h5 className='lecturer-subtitle'></h5>
            <div className="lecturer-img lecturer-img1"></div>
        </div>
        <div className="lecturer">
            <h3 className="lecturer-name">Євген Засоба <br /> <span>CTO at Somatic</span ></h3>
            <div className="lecturer-img lecturer-img2"></div>
        </div>
        <div className="lecturer">
            <h3 className="lecturer-name">Андрій Бойчук <br /> <span>Head of AI в blackthorn.ai</span></h3>
            <div className="lecturer-img lecturer-img3"></div>
        </div>
        <div className="lecturer">
            <h3 className="lecturer-name">Олександр Гурбич <br /> <span>CEO/Founder в blackthorn.ai</span></h3>
            <div className="lecturer-img lecturer-img4"></div>
        </div>
        <div className="lecturer">
            <h3 className="lecturer-name">Олексій Шамуратов <br /> <span>Data engineer, Brainstack_</span></h3>
            <div className="lecturer-img lecturer-img6"></div>
        </div>
        <div className="lecturer">
            <h3 className="lecturer-name">Олександр Пшеничний <br /> <span>Топ 1 архітект Украіни</span></h3>
            <div className="lecturer-img lecturer-img7"></div>
        </div>
        <div className="lecturer">
            <h3 className="lecturer-name">Олексій Сивоконь <br /> <span>Principal Applied Scientist at Microsoft</span></h3>
            <div className="lecturer-img lecturer-img8"></div>
        </div>
        <div className="lecturer">
            <h3 className="lecturer-name">Яцишин Володимир <br /> <span>CEO компанії GeeksCode</span></h3>
            <div className="lecturer-img lecturer-img9"></div>
        </div>
        <div className="lecturer">
            <h3 className="lecturer-name">
            Мартьянов Дмитро <br /> <span>COO at Pecode OU</span></h3>
            <div className="lecturer-img lecturer-img11"></div>
        </div>
        <div className="lecturer">
            <h3 className="lecturer-name">
            Владислав Михайлишин <br /> <span>R&D Manager in ChargeAfter</span></h3>
            <div className="lecturer-img lecturer-img12"></div>
        </div>
      </div>
    </section>
  )
}

export default Lecturers
