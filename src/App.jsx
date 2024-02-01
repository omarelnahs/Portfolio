import React from "react";
import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import Home from './components/home/Home'
import About from './components/about/About'
import Resume from './components/resume/Resume'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
function App() {

  const [darkMode, setDarkMode] = React.useState(true)

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <>  
      <div className="icon-darkmode" onClick={toggleDarkMode}>
        {darkMode ? <i class="fa-solid fa-moon moon"></i> : <i class="fa-solid fa-sun sun"></i>}
      </div>
      <Sidebar 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode}
      />
      <main className={darkMode ? "dark main": "main"}> 
        <Home
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode}
        />
        <About
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode}
        />
        <Resume
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode}
        />
        <Portfolio
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode}
        />
        <Contact
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode}
        />
      </main>
    </>
  );
}

export default App;