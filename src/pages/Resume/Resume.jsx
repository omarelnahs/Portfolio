import React from 'react'
import './resume.css'
import Data from '../../components/Card/Data'
import Card from '../../components/Card/Card'

const Resume = (props) => {
  return (
    <section className="resume container section" id="resume">
      <div className="resume__container grid">
        <div className={props.darkMode ? "dark timeline grid" : "timeline grid"}>
          <h2 className="section__title">Educations</h2>
          {Data.map((val, id) => {
            if(val.category === "education"){
              return(
                <Card 
                  key={id} 
                  icon={val.icon} 
                  title ={val.title} 
                  year = {val.year} 
                  desc={val.desc}
                />
              )
            }
          })}
        </div>
        
        <div className={props.darkMode ? "dark timeline grid" : "timeline grid"}>
          <h2 className="section__title">Experience</h2>
          {Data.map((val, id) => {
            if(val.category === "experience"){
              return(
                <Card 
                  key={id} 
                  icon={val.icon}
                  title ={val.title} 
                  year = {val.year} 
                  desc={val.desc}
                />
              )
            }
          })}

        </div>
      </div>
    </section>
  )
}

export default Resume