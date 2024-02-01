import React, { useState } from "react"
import "./sidebar.css"
const Sidebar = (props) => {

  const [toggle, showMenu] = useState(false)

  return (
    <div>
        <aside className={toggle  ? "aside show-menu" : "aside"} >
          <a href="#home" className="nav__logo">
            <h3>O<span>.</span></h3>
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
        {toggle ? <i class="fa-solid fa-xmark"></i> : <i class="fa-solid fa-bars"></i>}
      </div>
    </div>
  )
}

export default Sidebar