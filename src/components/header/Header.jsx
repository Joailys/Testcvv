import React from 'react';
import Socials from '../socials/Socials';
import './header.css';
import pierre from '../../assets/pierre.png'
import {FaFileDownload} from 'react-icons/fa';


function Header() {
  return (
    <>
        <div className='header' id='header'>
            <div className='container-text'>
            <h1 className='head-1'>Bienvenue, sur le portfolio de,</h1>
            <h2 className='head-2'>Pierre VANDEVELDE.</h2>
            <h3 className='head-3'>Je recherche une alternance.</h3>
            <p className='p-header'>Je suis en 3 ème année chez WIS LILLE, école tech d'expertise digitale et souhaite 
                trouver une alternance en tant que developpeur web ou community manager.
                Je suis en 3 ème année chez WIS LILLE, école tech d'expertise digitale et souhaite 
                trouver une alternance en tant que developpeur web ou community manager.
            </p>
            <a className="head-button" href="#"> Télécharger mon CV <FaFileDownload/></a>
            </div>
            <div className='container-img'>
                <img className='head-img' src={pierre} alt="" />
            </div>
        </div>

        <Socials/>

      </>
  )
}

export default Header
