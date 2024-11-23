import React from "react";
import './App.css'
import Sidebar from './Sidebar/Sidebar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Resume from './pages/Resume/Resume'
import Portfolio from './pages/Portfolio/Portfolio'
import Contact from "./pages/Contact/Contact";
function App() {

  const [darkMode, setDarkMode] = React.useState(false)

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <div className={darkMode ? "dark" :"light"}>  
      <div className={darkMode ? "icon-darkmode light" :"icon-darkmode dark"} onClick={toggleDarkMode}>
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
    </div>
  );
}

export default App;