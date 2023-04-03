import React from 'react'
import './footer.css'
import {AiOutlineFacebook} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'




const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Pierre Vandevelde</a>

      <ul className='permalinks'>
        <li><a href="#">Accueil</a></li>
        <li><a href="#presentation">Présentation</a></li>
        <li><a href="#competence">Compétences</a></li>
        <li><a href="#realisation">Réalisations</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="#"><AiOutlineFacebook className='footer__socials-icon'/></a>
        <a href="#"><AiOutlineInstagram className='footer__socials-icon'/></a>
        <a href="#"><AiOutlineLinkedin className='footer__socials-icon'/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Pierre Vandevelde, Tous droits réservés.</small>
      </div>
    </footer>
  )
}

export default Footer