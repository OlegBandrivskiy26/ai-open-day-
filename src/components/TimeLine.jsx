import React, { useState } from 'react';
import "../styles/timeline.css";

const TimeLine = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <section className="timeline">
      <h1 className="timeline-title">Розклад</h1>
      <div className="timeline-container">
        <div className="timeline-point-container">
          <h1 className="title-point">Семестр 1</h1>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, doloremque?
          </p>
          <hr className="hr-vertical" />
          <div className="point-empty" onClick={openSidebar}>
            <div className="circle"></div>
          </div>
        </div>
        <hr className="hr-horizontal" />
        <div className="timeline-point-container timeline-point-container-bottom">
          <div className="point-empty" onClick={openSidebar}>
            <div className="circle"></div>
          </div>
          <hr className="hr-vertical" />
          <h1 className="title-point">Семестр 2</h1>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, doloremque?
          </p>
        </div>
        <hr className="hr-horizontal" />
        <div className="timeline-point-container">
          <h1 className="title-point">Семестр 3</h1>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, doloremque?
          </p>
          <hr className="hr-vertical" />
          <div className="point-empty" onClick={openSidebar}>
            <div className="circle"></div>
          </div>
        </div>
        <hr className="hr-horizontal" />
        <div className="timeline-point-container timeline-point-container-bottom">
          <div className="point-empty" onClick={openSidebar}>
            <div className="circle"></div>
          </div>
          <hr className="hr-vertical" />
          <h1 className="title-point">Семестр 4</h1>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, doloremque?
          </p>
        </div>
        <hr className="hr-horizontal" />
        <div className="timeline-point-container">
          <h1 className="title-point">Семестр 5</h1>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, doloremque?
          </p>
          <hr className="hr-vertical" />
          <div className="point-empty" onClick={openSidebar}>
            <div className="circle"></div>
          </div>
        </div>
        <hr className="hr-horizontal" />
        <div className="timeline-point-container timeline-point-container-bottom">
          <div className="point-empty" onClick={openSidebar}>
            <div className="circle"></div>
          </div>
          <hr className="hr-vertical" />
          <h1 className="title-point">Семестр 6</h1>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, doloremque?
          </p>
        </div>
        <hr className="hr-horizontal" />
        <div className="timeline-point-container">
          <h1 className="title-point">Семестр 7</h1>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, doloremque?
          </p>
          <hr className="hr-vertical" />
          <div className="point-empty" onClick={openSidebar}>
            <div className="circle"></div>
          </div>
        </div>
        <hr className="hr-horizontal" />
        <div className="timeline-point-container timeline-point-container-bottom">
          <div className="point-empty" onClick={openSidebar}>
            <div className="circle"></div>
          </div>
          <hr className="hr-vertical" />
          <h1 className="title-point">Семестр 8</h1>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, doloremque?
          </p>
        </div>
      </div>

      {/* Бокова панель та оверлей */}
      {sidebarOpen && (
        <>
          <div className="sidebar-overlay active" onClick={closeSidebar}></div>
          <div className="sidebar-panel active">
            <button className="sidebar-close" onClick={closeSidebar}>Закрити</button>
            <h2 className="sidebar-header">Заголовок панелі</h2>
            <div className="sidebar-content">
              <p>
                Тут може бути додаткова інформація або деталі семестру. Ви можете змінити цей текст за потреби.
              </p>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default TimeLine;
