import React from 'react'
import './about.css'
import Image from '../../assets/me.jpg'
import Cv from '../../assets/resume.pdf'

const About = (props) => {
  return (
    <section className="section about container" id='about'>
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
          <img src={Image} alt="about" className='about__img' />

          <div className={props.darkMode ? "dark about__data grid": "about__data grid"}>
            <div className="about__info">
              <p className="about__description">
              I am Omar El-Nahas, web developer from Alexandria, Egypt. I am Computer Engineering student and have rich experience in web application like design, building and customization.
              </p>
              <a
                href={Cv}
                download="Example-PDF-document"
                target="_blank"
                rel="noreferrer"
              >
                <button className='btn download'>Download CV</button>     
              </a>
            </div>

            <div className="about__skills">
              <div className="skills__data">
                <div className="skills__icons">
                  <div className="skills__icon">
                    <i class="fa-brands fa-html5 html5"></i>
                  </div>
                  <div className="skills__icon">
                    <i class="fa-brands fa-css3-alt css"></i>
                  </div>
                  <div className="skills__icon">
                    <i class="fa-brands fa-bootstrap bootstrap"></i>
                  </div>
                  <div className="skills__icon">
                    <i class="fa-brands fa-js js"></i>
                  </div>
                  <div className="skills__icon">
                    <i class="fa-brands fa-react react"></i>
                  </div>
                  <div className="skills__icon">
                    <i class="fa-brands fa-figma figma"></i>
                  </div>
                  <div className="skills__icon">
                    <i class="fa-brands fa-git-alt git"></i>
                  </div>
                  <div className="skills__icon">
                    <i class="fa-brands fa-github github"></i>
                  </div>
                </div>
              </div>

            </div>
          </div>
      </div>
    </section>
  )
}

export default About