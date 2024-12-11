import React, { useState } from 'react'
import './portfolio.css'
import Menu from '../../components/Menu/Menu'

const Portfolio = () => {
  const [items, setItems] = useState(Menu)
  const filterItem = (categoryItem) =>{
    const updateItems = Menu.filter((curElment) =>{
      return curElment.category === categoryItem
    })

    setItems((updateItems))
  }

  return (
    <section className="work container section" id='portfolio'> 
      <h2 className="section__title">Recent Works</h2>

      <div className="work__filters">
        <span className="work__item" onClick={() => setItems(Menu)}>All</span>
        <span className="work__item" onClick={() => filterItem("Landing")}>Landing</span>
        <span className="work__item" onClick={() => filterItem("Dashboard")}>Dashboard</span>
        <span className="work__item" onClick={() => filterItem("React")}>React</span>
      </div>

      <div className="work__container grid">
        {items.map((element) => {
          const {id, image, title, category, link} = element
          return(
            <div className='work__card' key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className='work__img' />
                <div className="work__mask"></div>
              </div>

              <span className="work__category" style={{color:"#fff"}}>{category}</span>
              <h4 className="work__title">{title}</h4>
              <a href={link} className="work__button" target='_blanck'>
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio