import React from 'react'
import './about.css'
import Image from '../../assets/me.jpg'
import Cv from '../../assets/resume.pdf'
import html from "../../assets/HTML5.png"
import css from "../../assets/CSS3.png"
import bootstrap from "../../assets/Bootstrap.png"
import js from "../../assets/JavaScript.png"
import react from "../../assets/React.png"
import figma from "../../assets/Figma.png"
import tailwind from "../../assets/Tailwind CSS.png"
import redux from "../../assets/Redux.png"
import ts from "../../assets/TypeScript.png"
import sass from "../../assets/Sass.png"
import next from "../../assets/Next.js.png"
import jquery from "../../assets/jQuery.png"
import git from "../../assets/Git.png"

const About = (props) => {
  return (
    <section className="section about container" id='about'>
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
          <img src={Image} alt="about" className='about__img' />

          <div className={props.darkMode ? "dark about__data grid": "about__data grid"}>
            <div className="about__info d-flex flex-column justify-content-center mt-5">
              <p className="about__description">
              Hello! I'm Omar, a passionate Frontend Developer with over 5 years of experience in building dynamic and responsive web applications. My expertise lies in using modern frameworks like React.js and Next.js to create seamless user experiences. I thrive on solving complex problems and turning ideas into reality through code.
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
                    <img src={html} alt="html" />
                  </div>
                  <div className="skills__icon">
                    <img src={css} alt="html" />
                  </div>
                  <div className="skills__icon">
                    <img src={js} alt="html" />
                  </div>
                  <div className="skills__icon">
                    <img src={ts} alt="html" />
                  </div>
                  <div className="skills__icon">
                    <img src={bootstrap} alt="html" />
                  </div>
                  <div className="skills__icon">
                    <img src={tailwind} alt="html" />
                  </div>
                  <div className="skills__icon">
                    <img src={sass} alt="html" />
                  </div>
                  <div className="skills__icon">
                    <img src={jquery} alt="html" />
                  </div>
                  <div className="skills__icon">
                    <img src={react} alt="html" />
                  </div>
                  <div className="skills__icon">
                    <img src={next} alt="html" />
                  </div>
                  <div className="skills__icon">
                    <img src={redux} alt="html" />
                  </div>
                  <div className="skills__icon">
                    <img src={git} alt="html" />
                  </div>
                  <div className="skills__icon">
                    <img src={figma} alt="html" />
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