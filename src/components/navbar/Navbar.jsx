import React, { useState }from 'react'
import './navbar.css'



function Navbar() {

    const [showNavbar, setShowNavbar] = useState(false)
    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)

    }
    const [activeNav, setActiveNav] = useState('#')

    return (

    <>
        <nav>
            <div className="logo-container">
                <h2>Pierre VANDEVELDE</h2>
            </div>
            <div>
                <button onClick={handleShowNavbar} className={`main_media_button ${showNavbar && 'active-btn'}`} id="mediaButton">
                    <span className="up-nav"></span>
                    <span className="middle-nav"></span>
                    <span className="down-nav"></span>
                </button>
            </div>
            <div className={`nav-container ${showNavbar && 'active-nav'}`} id="nav-container">
                <ul className="nav-ul">

                    <li className="list-items"><a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><span>01. </span>Accueil</a></li>

                    <li className="list-items"><a href="#presentation" onClick={() => setActiveNav('#presentation')} className={activeNav === '#presentation' ? 'active' : ''}><span>02. </span>Présentation</a></li>

                    <li className="list-items"><a href="#competence"onClick={() => setActiveNav('#competence')} className={activeNav === '#competence' ? 'active' : ''}><span>03. </span>Compétences</a></li>

                    <li className="list-items"><a href="#realisation"onClick={() => setActiveNav('#realisation')} className={activeNav === '#realisation' ? 'active' : ''}><span>04. </span>Réalisations</a></li>

                    <li className="list-items"><a href="#contact"onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><span>05. </span>Contact</a></li>
                    
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar
