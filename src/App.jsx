import React from "react";
import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import Home from './components/home/Home'
import About from './components/about/About'
import Resume from './components/resume/Resume'
import Portfolio from './components/portfolio/Portfolio'
import Blog from './components/blog/Blog'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
function App() {
  return (
    <>  
      <Sidebar />
      <main className="main"> 
        <Home/>
        <About/>
        <Resume/>
        <Portfolio/>
        <Testimonials/>
        <Blog />
        <Contact/>
      </main>
    </>
  );
}

export default App;