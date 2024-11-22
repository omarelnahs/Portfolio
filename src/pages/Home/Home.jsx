import "./home.css"
import Me from '../../assets/me.jpg'
import HeaderSocials from "../../components/HomeComponent/HeaderSocials"
import ScrollDown from "../../components/HomeComponent/ScrollDown"
import Shapes from "../../components/HomeComponent/Shapes"

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="profile" className="home__img" />
        <h1 className="home__name">Omar El-Nahas</h1>
        <span className="jop">Front-End Developer</span>
        <HeaderSocials />
        <a href="#contact" className="btn">Hire Me</a>
        <ScrollDown/>
      </div>
      <Shapes/>
    </section>
  )
}

export default Home