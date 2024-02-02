import React, { useState } from "react"
import "./sidebar.css"
const Sidebar = (props) => {

  const [toggle, showMenu] = useState(false)

  return (
    <div>
      <aside className={toggle  ? "aside show-menu" : "aside"} >
          <a href="#home" className="nav__logo">
            <logo>O<span>.</span></logo>
          </a>

          <nav className="nav">
            <div className="nav__menu">
              <ul className="nav__list">
                <li className="nav__item">
                  <a href="#home" className="nav__link">
                    <i className="icon-home"></i>
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#about" className="nav__link">
                    <i className="icon-user-following"></i>
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#resume" className="nav__link">
                    <i className="icon-graduation"></i>
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#portfolio" className="nav__link">
                    <i className="icon-layers"></i>
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#contact" className="nav__link">
                    <i className="icon-bubble"></i>
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="nav__footer">
            <span className="copyright">&copy; 2023 - 2024.</span>
          </div>
      </aside>
      <div className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"} onClick={()=> showMenu(!toggle)}>
        {toggle ? 
          <i className={props.darkMode ? "fa-solid fa-xmark light" :"fa-solid fa-xmark dark"}></i> :
          <i className={props.darkMode ? "fa-solid fa-bars light" :"fa-solid fa-bars dark"}></i>
        }
      </div>
    </div>
  )
}

export default Sidebar